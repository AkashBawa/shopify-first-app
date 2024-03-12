import { json, ActionFunction, LoaderFunction } from "@remix-run/node";
import { Form, useActionData, useLoaderData } from "@remix-run/react";


export const loader: LoaderFunction = () => {
   return json({
    message: "text data"
   })
}

export const action: ActionFunction = async ( {request} ) => {
    const formData = await request.formData();
    console.log(formData.entries())
    // return formData.values();
    return Object.fromEntries(formData.entries());
}

export default function Data () {

    const loadData : {message: string} = useLoaderData();
    const actionData: any = useActionData();
    
    return <div>
        <Form method="POST">
            <input type="text" name="firstName" />
            <input type="text" name="lastName" />
            <button type="submit" >Submit</button>
        </Form>
        <div>
            {
                actionData ? <div>  {actionData.firstName} </div> : <p>No action data</p>
            }
        </div>
    </div>
}