import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Navbar from "../../mycomponents/Navbar";
import Footer from "../../mycomponents/Footer";
import { Link } from "react-router-dom";

const formSchema = z.object({
  emailAddress: z.string().email(),
  password: z.string().min(3),
});

export default function LoginScreenV1() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      emailAddress: "",
      password: "",
    },
    mode: "onSubmit", // Only validate on form submission
  });

  const handleClick = () => {
    console.log("Show modal");
  };

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    console.log({ values });
  };

  return (
    <>
      <Navbar />
      <Link to="/">
        <h1 className="m-14 mb-0 ml-20 rounded-[0.8rem]  py-[1.8rem] text-[2.4rem] sm:m-0 sm:ml-32 sm:mt-16 lg:ml-56 ">
          Go Back
        </h1>
      </Link>
      <main className="flex max-w-[120rem] flex-col items-center justify-between  p-20 xl:max-w-[130rem] ">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="flex w-full max-w-3xl flex-col gap-8  border  p-12 shadow-xl"
          >
            <h1 className="text-bold mb-3 text-[3.6rem] text-foreground">
              Sign In
            </h1>
            <FormField
              control={form.control}
              name="emailAddress"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel className="text-3xl leading-[1.8] tracking-wide">
                      Email address
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="py-[2rem] text-2xl"
                        placeholder="Email address"
                        type="email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel className="text-3xl leading-[1.8] tracking-wide">
                      Password
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="py-[2rem] text-2xl"
                        placeholder="Password"
                        type="password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />

            <Button
              type="submit"
              className="w-[25%] rounded-[0.8rem] py-[1.8rem] text-3xl"
            >
              Login
            </Button>

            <div className="mt-2">
              <p className="m-1 text-2xl font-medium">Not a customer?</p>

              <button onClick={handleClick} className="m-1 text-2xl ">
                Register
              </button>
            </div>
          </form>
        </Form>
      </main>
      <Footer />
    </>
  );
}
