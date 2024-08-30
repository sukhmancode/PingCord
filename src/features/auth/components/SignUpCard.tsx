import { Button } from "@/components/ui/button"
import { FcGoogle } from "react-icons/fc"
import { FaGithub,FaDiscord } from "react-icons/fa"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { SignInFlow } from "../types"
import { useState } from "react"

interface SignUpCardProps  {
    setState: (state: SignInFlow) => void;
}
export const SignUpCard = ({setState}: SignUpCardProps) => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [confirmPassword,setConfirmPassword] = useState("")
    return (
        <div>
            <Card className="w-full h-full p-8"> 
                <CardHeader className="px-0 pt-0">
                    <CardTitle className="items-center flex self-center">
                        Sign Up
                    </CardTitle>
                </CardHeader>
                <CardDescription>
                    Use or Email or another service to continue
                </CardDescription>
                <CardContent className="space-y-5 px-0 pb-0">
                    <form className="space-y-2.5">
                        <Input 
                            disabled={false}
                            value={email}
                            onChange={(e) => {setEmail(e.target.value)}}
                            placeholder="email"
                            type="email"
                            required
                        />
                        <Input 
                            disabled={false}
                            value={""}
                            onChange={(e) => {setPassword(e.target.value)}}
                            placeholder="password"
                            type="password"
                            required
                        />
                          <Input 
                            disabled={false}
                            value={confirmPassword}
                            onChange={(e) => {setConfirmPassword(e.target.value)}}
                            placeholder="Confirm password"
                            type="password"
                            required
                        />
                        <Button type="submit" className="w-full" size="lg" disabled={false}>
                            Continue
                        </Button>
                    </form>
                    <Separator />
                    <div className="flex flex-col gap-y-2.5">
                        <Button 
                        disabled={false} 
                        onClick={() => {}}
                        variant={"outline"}
                        size={"lg"}
                        className="w-full relative">
                            <FcGoogle className="size-5 absolute left-2.5 top-2.5"/> Continue with Google
                        </Button>
                        <Button 
                        disabled={false} 
                        onClick={() => {}}
                        variant={"outline"}
                        size={"lg"}
                        className="w-full relative">
                            <FaDiscord className="size-5 absolute left-2.5 top-2.5"/> Continue with Discord
                        </Button>
                    </div>
                    <p className="text-xs text-muted-foreground">
                        Already have an account ? <span onClick={() => setState("signIn")} className="text-sky-700 hover:underline cursor-pointer">Sign Up</span>
                    </p>
                </CardContent>
            </Card>
        </div>
    )
}
