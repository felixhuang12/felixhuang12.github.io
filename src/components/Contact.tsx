import { VStack, FormControl, Input, FormErrorMessage, Button, Stack, Heading, Textarea, useToast } from "@chakra-ui/react"
import { Field, Form, Formik } from "formik"
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser"
import { useState } from "react"

interface ContactInputProps {
    name: string,
    email: string,
    subject: string,
    message: string
}

const ContactInput = (props: any) => {
    return (
        <Input {...props} borderWidth={2} />
    )
}

const ContactForm = () => {
    const [isEmailSending, setIsEmailSending] = useState(false)
    const toast = useToast()

    const sendEmail = async (input: ContactInputProps) => {
        try {
            const emailPromise = emailjs.send(
                process.env.REACT_APP_EMAILJS_SERVICE_ID!,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID!,
                {
                    from_name: input.name,
                    to_name: "Felix",
                    email_address: input.email,
                    subject: input.subject,
                    message: input.message
                },
                process.env.REACT_APP_EMAILJS_API_KEY!)

            const timeoutPromise = new Promise((_, reject) => {
                setTimeout(() => {
                    reject(new Error('Email sending timed out'));
                }, 10000)
            })

            const result = await Promise.race([emailPromise, timeoutPromise])

            if (result == null || (result as EmailJSResponseStatus).status !== 200) {
                return false
            }
            return true
        } catch (error) {
            return false
        }
    }

    const validate = (value: string) => {
        let error
        if (!value) {
            error = "Required"
        }
        return error
    }

    return (
        <Formik
            initialValues={{
                name: "",
                email: "",
                subject: "",
                message: ""
            }}
            onSubmit={async (values, actions) => {
                setIsEmailSending(true)
                const emailSent = await sendEmail(values)
                actions.setSubmitting(false)
                if (emailSent) {
                    toast({
                        title: 'Message sent!',
                        description: "I'll be in touch shortly.",
                        status: 'success',
                        duration: 5000,
                        isClosable: true,
                    })
                    actions.resetForm()
                } else {
                    toast({
                        title: 'Failed to send message.',
                        description: "Try again later.",
                        status: 'error',
                        duration: 5000,
                        isClosable: true,
                    })
                }
                setIsEmailSending(false)
            }}
        >
            {({ handleSubmit, errors, touched }) => (
                <Form onSubmit={handleSubmit}>
                    <VStack spacing={2} align="flex-start">
                        <FormControl isInvalid={!!errors.name && touched.name}>
                            <Field
                                as={ContactInput}
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Full name"
                                validate={validate}
                            />
                            <FormErrorMessage>{errors.name}</FormErrorMessage>
                        </FormControl>
                        <FormControl isInvalid={!!errors.email && touched.email}>
                            <Field
                                as={ContactInput}
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Email address"
                                validate={validate}
                            />
                            <FormErrorMessage>{errors.email}</FormErrorMessage>
                        </FormControl>
                        <FormControl isInvalid={!!errors.subject && touched.subject}>
                            <Field
                                as={ContactInput}
                                id="subject"
                                name="subject"
                                type="text"
                                placeholder="Subject"
                                validate={validate}
                            />
                            <FormErrorMessage>{errors.subject}</FormErrorMessage>
                        </FormControl>
                        <FormControl isInvalid={!!errors.message && touched.message}>
                            <Field
                                as={Textarea}
                                id="message"
                                name="message"
                                type="text"
                                placeholder="Type your message here..."
                                rows="10"
                                validate={validate}
                                height="300px"
                                borderWidth="2px"
                            />
                            <FormErrorMessage>{errors.message}</FormErrorMessage>
                        </FormControl>
                        <Button type="submit" bgColor="#EFDECD" textColor={'#4B3621'} _hover={{ bgColor: '#F7F1E0' }} mt={4} isLoading={isEmailSending}>
                            Send message
                        </Button>
                    </VStack>
                </Form>
            )}
        </Formik>
    )
}

const Contact = () => {
    return (
        <Stack maxHeight={'100%'} maxWidth={'100%'} justifyContent={'center'} alignItems={'center'} mb={8}>
            <Stack rounded="md" width={{ base: '90%', md: '40%' }}>
                <Heading id="contact-me" fontSize={44} mb={4} alignSelf={'center'}>Let's get in touch!</Heading>
                <ContactForm />
            </Stack>
        </Stack>
    )
}

export default Contact
