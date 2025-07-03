import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

interface AdminSetupData {
  password: string;
  confirmPassword: string;
}

const ADMIN_EMAIL = "admin@rosebank.ac.za";

const AdminSetup = ({ onSetupComplete }: { onSetupComplete: () => void }) => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm<AdminSetupData>();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const password = watch("password");

  const onSubmit = async (data: AdminSetupData) => {
    if (data.password !== data.confirmPassword) {
      toast({
        title: "Password Mismatch",
        description: "Passwords do not match",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, ADMIN_EMAIL, data.password);
      toast({
        title: "Admin Account Created",
        description: "Admin account has been successfully created",
      });
      onSetupComplete();
    } catch (error: any) {
      toast({
        title: "Setup Failed",
        description: error.message,
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-card p-8 rounded-lg border">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-foreground">Setup Admin Account</h2>
        <p className="text-muted-foreground mt-2">
          Create the admin account for: {ADMIN_EMAIL}
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <Label htmlFor="password">Admin Password</Label>
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
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <Input
            id="confirmPassword"
            type="password"
            {...register("confirmPassword", { 
              required: "Please confirm your password",
              validate: (value) => value === password || "Passwords do not match"
            })}
            className="mt-2"
          />
          {errors.confirmPassword && (
            <p className="text-destructive text-sm mt-1">{errors.confirmPassword.message}</p>
          )}
        </div>

        <Button 
          type="submit" 
          disabled={isLoading}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
        >
          {isLoading ? "Creating Admin..." : "Create Admin Account"}
        </Button>
      </form>
    </div>
  );
};

export default AdminSetup;