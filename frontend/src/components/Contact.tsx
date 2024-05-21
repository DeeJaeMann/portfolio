import { z } from "zod";
import axios from "axios";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import Title from "./Title";

const Contact = () => {

  const formUrl = "https://getform.io/f/lbjkvjwa"
  // Define the shape of the form using Zod schema
  const formSchema = z.object({
    name: z
      .string()
      .min(2, {
        message: "Name must be at least 2 characters.",
      })
      .max(50, {
        message: "Name must not be greater than 50 characters",
      }),
    email: z
      .string()
      .min(10, {
        message: "Email must be at least 10 characters.",
      })
      .max(254, {
        message: "Email must not be greater than 254 characters",
      }),
    message: z.string().min(30, {
      message: "Message must be at least 30 characters.",
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const sendForm = async (dataBody: object) => {
    const response = await axios.post(formUrl, dataBody)
    console.log(response)
  }

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    sendForm(values)
  };



  return (
    <div className="flex flex-col mb-10 mx-auto">
      <div className="flex justify-center items-center">
        <div className="flex flex-col w-full md:w-7/12">
          <Title>Contact</Title>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="name"

                render={({ field }) => (
                  <FormItem className="space-y-1">
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="space-y-1">
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="Enter your contact email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem className="space-y-1">
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        rows={10}
                        placeholder="Enter your message"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Your contact information will not be shared with anyone.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="drop-shadow-md hover:bg-blue-500 bg-gradient-to-r from-cyan-600 to-blue-900 dark:to-cyan-600 dark:from-blue-900"
              >
                Submit
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
