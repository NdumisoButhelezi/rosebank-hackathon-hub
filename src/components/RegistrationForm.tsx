import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

interface RegistrationFormData {
  fullName: string;
  email: string;
  password: string;
  institution: string;
  studentClub: string;
}

const RegistrationForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<RegistrationFormData>();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: RegistrationFormData) => {
    setIsLoading(true);
    try {
      // Create Firebase Auth user
      const userCredential = await createUserWithEmailAndPassword(
        auth, 
        data.email, 
        data.password
      );

      // Store additional participant data in Firestore
      await setDoc(doc(db, "participants", userCredential.user.uid), {
        fullName: data.fullName,
        email: data.email,
        institution: data.institution,
        studentClub: data.studentClub,
        registrationDate: new Date(),
        uid: userCredential.user.uid
      });

      toast({
        title: "Registration Successful!",
        description: "Welcome to the Rosebank Women in ICT Hackathon 2025",
      });

      reset();
    } catch (error: any) {
      toast({
        title: "Registration Failed",
        description: error.message,
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Register for the Hackathon
          </h2>
          <p className="text-lg text-muted-foreground">
            Join us for an incredible 48-hour innovation challenge
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-card p-8 rounded-lg border">
          <div>
            <Label htmlFor="fullName">Full Name</Label>
            <Input
              id="fullName"
              {...register("fullName", { required: "Full name is required" })}
              className="mt-2"
            />
            {errors.fullName && (
              <p className="text-destructive text-sm mt-1">{errors.fullName.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              {...register("email", { 
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address"
                }
              })}
              className="mt-2"
            />
            {errors.email && (
              <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              {...register("password", { 
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters"
                }
              })}
              className="mt-2"
            />
            {errors.password && (
              <p className="text-destructive text-sm mt-1">{errors.password.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="institution">Institution</Label>
            <Input
              id="institution"
              {...register("institution", { required: "Institution is required" })}
              className="mt-2"
            />
            {errors.institution && (
              <p className="text-destructive text-sm mt-1">{errors.institution.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="studentClub">Student Club</Label>
            <Input
              id="studentClub"
              {...register("studentClub", { required: "Student club is required" })}
              className="mt-2"
            />
            {errors.studentClub && (
              <p className="text-destructive text-sm mt-1">{errors.studentClub.message}</p>
            )}
          </div>

          <Button 
            type="submit" 
            disabled={isLoading}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            {isLoading ? "Registering..." : "Register for Hackathon"}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default RegistrationForm;