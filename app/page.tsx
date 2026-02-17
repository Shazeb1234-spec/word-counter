'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Textarea } from "@/components/ui/textarea"

export default function Page() {
    return (
        <div className="w-md items-center text-center">
            
            <Card>
                <CardHeader>
                    <CardTitle>Word Counter</CardTitle>
                    <CardDescription>This program will count how many words you made</CardDescription>
                </CardHeader>
                <CardContent>
                    <FieldGroup>
                        <Field>
                            <FieldLabel>Your Text</FieldLabel>
                            <Textarea placeholder="Enter your text here..."/>
                        </Field>
                    </FieldGroup>
                </CardContent>
            </Card>
        </div>
    )
}