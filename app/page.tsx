'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export default function Page() {

    const [text, setText] = useState<string>("")
    const [textA, setTextA] = useState<string>("")

    const [wordCount, setWordCount] = useState<number>(0)
    const [characterCount, setCharacterCount] = useState<number>(0)
    const [sentenceCount, setSentenceCount] = useState<number>(0)
    const [vowelCount, setVowelCount] = useState<number>(0)

    function countVowel(str: string) {
        const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"])
        let count = 0

        for(let i = 0; i < str.length; i++) {
            if (vowels.has(str.charAt(i))) {
                count+=1 

            }

        }
            return count

    }
    
    function analyzeText() {
        setTextA(text) 
        setCharacterCount(text.length)
        setWordCount(text.split(" ").length)
        setSentenceCount(text.split(/[.?!]+/).filter(Boolean).length)
        setVowelCount(countVowel(textA))
    }

    

    return (

        <div className="my-10 flex flex-col items-center">

            <Card size="sm" className="mx-auto w-full max-w-sm">
                <CardHeader>
                    <CardTitle>Word Counter</CardTitle>
                    <CardDescription>This program will count how many words you made</CardDescription>
                </CardHeader>
                <CardContent>
                    <FieldGroup>
                        <Field>
                            <FieldLabel>Your Text </FieldLabel>
                            <Textarea placeholder="Enter your text here..." defaultValue={text} value={text} onChange={(event) => setText(event.target.value)} />
                        </Field>
                        <Field className="grid grid-cols-2 gap-4">
                            <Button onClick={analyzeText}>Analyze Text</Button>
                            <Button onClick={() => setText("")} >Reset</Button>
                        </Field>
                        <Field>
                            <FieldLabel>Word Count: {wordCount} </FieldLabel>
                            <FieldLabel>Character count: {characterCount} </FieldLabel>
                            <FieldLabel>Sentence count: {sentenceCount} </FieldLabel>
                            <FieldLabel>Vowel count: {vowelCount} </FieldLabel>
                            <FieldLabel>You entered sentence: {textA} </FieldLabel>

                        </Field>
                    </FieldGroup>
                </CardContent>
            </Card>
        </div>
    )
}