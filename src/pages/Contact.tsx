import { VStack, FormControl, Input, FormErrorMessage, Button, Stack, Heading, Textarea } from "@chakra-ui/react"
import { Field, Form, Formik } from "formik"
import Navbar from "../components/Navbar"

interface ContactFormProps {
    name: string
    email: string
    subject: string
    message: string
}

const ContactInput = (props: any) => {
    return (
        <Input {...props} borderWidth={2} />
    )
}

const ContactForm = () => {
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
            onSubmit={(values, actions) => {
                console.log({ values, actions });
                alert(JSON.stringify(values, null, 2));
                actions.setSubmitting(false);
            }}
        >
            {({ handleSubmit, errors, touched }) => (
                <Form onSubmit={handleSubmit}>
                    <VStack spacing={2} align="flex-start">
                        <FormControl isInvalid={(!!errors.name) && touched.name}>
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
                        <FormControl isInvalid={(errors.email !== undefined && errors.email.length !== 0) && touched.email}>
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
                        <FormControl isInvalid={(errors.subject !== undefined && errors.subject.length !== 0) && touched.subject}>
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
                        <FormControl isInvalid={(errors.message !== undefined && errors.message.length !== 0) && touched.message}>
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
                        <Button type="submit" colorScheme="orange" mt={4}>
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
        <Stack maxHeight={'100%'} maxWidth={'100%'} justifyContent={'center'} alignItems={'center'}>
            <Navbar />
            <Stack p={6} rounded="md" width={{ base: '90%', md: '40%' }}>
                <Heading mb={4}>Let's get in touch!</Heading>
                <ContactForm />
            </Stack>
        </Stack>
    )
}

export default Contact
