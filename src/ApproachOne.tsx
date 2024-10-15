import { readonly } from "./Types";

// Usage example:
type MyProps = {
    name: string;
    age: number;
    hobbies: string[];
};

export const MyComponent = readonly<MyProps>
    ((props) => {
        props.hobbies.push('coding');
        return (
            <div>
                {props.name} is {props.age} years old and enjoys {props.hobbies.join(', ')}.
            </div>
        );
    });