// import PropTypes from "prop-types"

// import { useState } from "react";




// import Mobile from "./components/mobile"
// import Laptop from "./components/laptop"
// import NewBooks from "./components/newBooks"
// import CreateCustomer from "./features/customers/CreateCustomer";
// import Customer from "./features/customers/Customer";
// import AccountOperations from "./features/accounts/AccountOperations";
// import BalanceDisplay from "./features/accounts/BalanceDisplay";


// import "./store"


// commented Code
// function Navigation(){
//     return(
//         <>
//             <ul>
//                 <li>
//                     <Link to="/">Home</Link>
//                 </li>
//                 <li>
//                     <Link to="/books">Book</Link>
//                 </li>
//             </ul>
//         </>
//     )
// }
// Rendering Lists
// const products = [
//     {
//         name: "Thinking Fast and Slow Book",
//         price: 250,
//         isAvalable: true,
//         rating: 4.5
//     },
//     {
//         name: "Eat That Frog Book",
//         price: 85,
//         isAvalable: true,
//         rating: 5
//     },
//     {
//         name: "Shoe DOG Book",
//         price: 235,
//         isAvalable: false,
//         rating: 3.9
//     },
//     {
//         name: "The 4 Hour Work Week Book",
//         price: 150,
//         isAvalable: true,
//         rating: 4.5
//     }
// ];



// function Products() {
//     return (
//         <div>
//             {products.map((product) => (
//                 <Items product={product} key={product.name}/>
//             ))}

//         </div>
//     )
// }

// function Items(prop){
//     return(
//         <div>
//             <h1>Name: {prop.product.name}</h1>
//                     <h2>Price {prop.product.price} TAKA</h2>
//                     <h2>{prop.product.isAvalable ? 'Avalable' : 'Not Avalable'}</h2>
//                     <h2>Rating {prop.product.rating} star</h2>
//         </div>
//     )
// }




// function App() {
//     return (
//         <div>
//             <h1>🏦 The React-Redux Bank ⚛️</h1>
//             <CreateCustomer />
//             <Customer />
//             <AccountOperations />
//             <BalanceDisplay />
//         </div>
//     );
// }


// const personData = [

//     {
//         personName: "Masfik Talukdar",
//         personImage: "https://i.postimg.cc/621dgzh4/Facebook-pic.png/",
//         skillItems: [
//             {
//                 name: "Web Development",
//                 color: "red",
//                 level: "Intermediate"
//             },
//             {
//                 name: "Machine Learning and AI",
//                 color: "blue",
//                 level: "Beginner"
//             },
//             {
//                 name: "Graphics Design",
//                 color: "green",
//                 level: "Expert"
//             },
//             {
//                 name: "Cyber Security",
//                 color: "cyan",
//                 level: "Intermediate"
//             }
//         ]
//     },
//     {
//         personName: "Tasrif Akonda",
//         personImage: "https://i.postimg.cc/Y4y1vbm2/1714052191668.jpg",
//         skillItems: [
//             {
//                 name: "Cyber-security",
//                 color: "red",
//                 level: "Expert"
//             },
//             {
//                 name: "Bug Bounty",
//                 color: "yellow",
//                 level: "Beginner"
//             },
//             {
//                 name: "Web Security",
//                 color: "green",
//                 level: "Intermediate"
//             },
//             {
//                 name: "Penetration Testing",
//                 color: "cyan",
//                 level: "Intermediate"
//             }
//         ]
//     }
// ];

// function App() {
//     return (
//         <>
//             {
//                 personData.map((skill) => (
//                     <ProfileCart skills={skill} key={skill.name} />
//                 ))
//             }
//         </>
//     )
// }


// function ProfileCart({ skills }) {
//     return (
//         <div style={{ display: "inline-block", justifyContent: "space-between", top: "40px", marginRight: "50px" , borderRadius: "4px", backgroundColor: "gray"}}>
//             <h1>{skills.personName}</h1>
//             <img src={skills.personImage} alt="person" />
//             <br />
//             {
//                 skills.skillItems.map((skill) => {
//                     return <SkillItem skill={skill} key={skill.name} />
//                 })
//             }
//         </div>
//     )
// }


// function SkillItem({ skill }) {

//     const getEmojie = function(level){
//         switch (level){
//             case "Beginner":
//                 return "👶"
//             case "Intermediate":
//                 return "👨‍💻"
//             case "Expert":
//                 return "👨‍💻‍👨‍💻💪"
//             default:
//                 return ""
//         }
//     }
//     return (
//         <>
//         <h5 style={{backgroundColor: `${skill.color}`}}>{getEmojie(skill.level)} {skill.name}</h5>
//         </>

//     )
// }

// ProfileCart.propTypes = {
//     skills: PropTypes.object
// }
// SkillItem.propTypes = {
//     skill: PropTypes.object
// }

/*

* React Learning path Cart

import { useState } from "react"
import "./App.css"

export default function App() {
    return (
        <Cart />
    )
}

function Cart() {

    const [counter, setCounter] = useState(1);
    const message = [
        `Step ${counter}: Learn React`,
        `Step ${counter}: Create cool Projects`,
        `Step ${counter}: Then move to other skills`
    ]

    const incrementCount = ()=> {
        setCounter((count)=> count < 3 ? count +  1 : count)

    };
    const decrementCount = ()=> {
        setCounter((count)=> count > 1 ? count  - 1 : count)
    }


    return (
        <div className="container">
            <div className="number-container ">
                <h3 className={`number active`}>1</h3>
                <h3 className={`number ${counter >= 2 ? "active" : ""}`}>2</h3>
                <h3 className={`number ${counter >= 3 ? "active" : ""}`}>3</h3>

            </div>
            <h1 className="cart-text">{message[counter - 1]}</h1>
            <div className="button-area">
                <button onClick={decrementCount} className="button">Previous</button>
                <button onClick={incrementCount} className="button">Next</button>
            </div>
        </div>
    )
}

*Date Counter

export default function App(){
    return(
        <DateCounter/>
    )
}

function DateCounter(){
    const [step, setStep] = useState(1)
    const [dateCount, setDateCount] = useState(0)

    const date = new Date();
    date.setDate(date.getDate() + dateCount);

    const handleStepIncrement = function(){
        setStep((step)=> step + 1)
    }

    const handleStepDecrement = function(){
        setStep((step)=> step - 1)
    }

    const handleDateIncrement = function(){
        setDateCount((value)=> value + step)
    }

    const handleDateDecrement = function(){
        setDateCount((value)=> value - step)
    }

    return(
        <>
            <button onClick={handleStepDecrement}>-</button>
            <span>Step: {step}</span>
            <button onClick={handleStepIncrement}>+</button>
            <br />
            <button onClick={handleDateDecrement}>-</button>
            <span>Date: {dateCount}</span>
            <button onClick={handleDateIncrement}>+</button>

            <p>
        <span>
          {dateCount === 0
            ? "Today is "
            : dateCount > 0
            ? `${dateCount} days from today is `
            : `${Math.abs(dateCount)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
        </>
    )
}

* Rendering Lists
import "./App.css";
import PropTypes from "prop-types"

const faqs = [
    {
        title: "Where are these chairs assembled?",
        text:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus."
    },
    {
        title: "How long do I have to return my chair?",
        text:
            "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus."
    },
    {
        title: "Do you ship to countries outside the EU?",
        text:
            "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!"
    }
];

export default function App() {
    return (
        <div>
            <Accordion />
        </div>
    );
}

function Accordion() {
    return <div className="accordion">
        {faqs.map((item) => (
            <Item item={item} key={item.title} />
        ))}
    </div>;
}
function Item({item}) {
    return (
        <div className="item">
            <div className="content-box">
                <ul>
                    <h1 className="title">{item.index} {item.title}</h1>
                    <p>{item.text}</p>
                </ul>
            </div>
        </div>
    )
}

Item.propTypes = {
    item: PropTypes.object
}
const list = [
    {
        name: "Masfik Talukdar",
        age: 25,
        role: "Web Developer"
    },
    {
        name: "Rahul Sarker",
        age: 30,
        role: "Graphics Designer"
    }
]

export default function App() {
    return (
        <Lists />
    )
}

function Lists() {
    return (
        <>
            {list.map((identity) => (
                <LitsItem item={identity} key={identity.name} />
            ))}
        </>
    )
}
function LitsItem({ item }) {
    return (
        <>
            <ul>
                <li>{item.name}</li>
                <li>{item.age}</li>
                <li>{item.role}</li>
            </ul>
        </>
    )
}
Exercise 2

export default function App(){
    return(
        <Button/>
    )
}
function Button(){
    const [button, setButton] = useState(false);
    return(
        <>
        <button onClick={()=> setButton(!button)}>{button ? 'ON':'OFF'}</button>
        </>
    )
}
Exercise 3

export default function App(){
    return(
        <Form/>
    )
}

function Form(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [submittedData, setSubmittedData] = useState({name: "", email: ""})

    function displayNameEmail(e){
        e.preventDefault();
        setSubmittedData({name, email})
    }

    return(
        <>
            <form onSubmit={displayNameEmail}>
                <input type="text" value={name} onChange={(e)=> setName(e.target.value)} />
                <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
                <button type="submit">Submit</button>
            </form>
            {
                submittedData && (
                    <>
                        <h2>{submittedData.name}</h2>
                        <h2>{submittedData.email}</h2>
                    </>
                )
            }

            
        </>
    )
}
Exercise 6

export default function App(){
    const [counter, setCounter] = useState(0);
    return(
        <button onClick={()=> setCounter((count)=> count + 2)}>{counter}</button>
    )
}
export default function App() {
    const [tasks, setTasks] = useState([]);
    const [taskName, setTaskName] = useState('');

    function handleSubmit() {
        if (taskName) {
            setTasks([...tasks, taskName]);
            setTaskName('');
        }
    }
    return (
        <>
            <input value={taskName} onChange={(e) => setTaskName(e.target.value)} type="text" />
            <button onClick={() => handleSubmit()}>Add Task</button>
            {tasks.length > 0 && tasks.map((task, index) => (
                <TodoBody tasks={task} key={index} />
            ))}
        </>
    )
}
function TodoBody({ tasks }) {
    return (
        <>
            <span>{tasks}</span>
            <span>❌</span>
        </>
    )
}
// Exercise 7
import Portal from "./portal"

function App() {
  return (
    <>
        <div id="portal-itital-root">

        </div>
        <div id="portal-final-root">
            
        </div>
        <Portal/>
    </>
  )
}

export default App
*/

// context API for advance state management
/*
import React from 'react'

const InputContext = createContext();
function App() {
    const [input, setInput] = useState("");
    return (
        <InputContext.Provider value={{
            input: input,
            setInput: setInput
        }}>
            <div>
                <Children1/>
                <Children2/>
            </div>
        </InputContext.Provider>
    )
}

function Children1() {
    return (
        <NestedComp1/>
    )
}
function NestedComp1() {
    const {input, setInput} = useContext(InputContext)
    return (
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
    )
}
function Children2() {
    return (
        <NestedComp2 />
    )
}
function NestedComp2() {
    const {input} = useContext(InputContext)
    return (
        <h1>{input}</h1>
    )
}
export default App

--------- Custom hooks --------- 

import React from 'react'
import "./App.css"



function App() {
    const [itemInput, setItemInput] = useState("");
    const [itemPrice, setItemPrice] = useState('');
    const [itemQuantity, setItemQuantity] = useState('');
    const [itemArray, setItemArray] = useState([
        {
            name: "Keyboard",
            quantity: 23,
            price: 899
        },
        {
            name: "Mouse",
            quantity: 23,
            price: 250
        },
        {
            name: "Monitor",
            quantity: 23,
            price: 7999
        }
    ]);

    function handleSubmit() {
        const newItem = {
            name: itemInput,
            price: itemPrice, 
            quantity: itemQuantity
        }
        if(newItem.price <=0 || newItem.price == ""){
            setItemQuantity('Stock Out')
        }
        setItemArray((items)=> [...items, newItem]);
        setItemInput('');
        setItemPrice('');
        setItemQuantity('');
        console.log(newItem)
    }

    return (
        <div>
            <input value={itemInput} placeholder="Enter the Item" onChange={(e) => setItemInput(e.target.value)} />
            <input type="number" value={itemPrice} placeholder="Item Price" onChange={(e) => setItemPrice(+e.target.value)} />
            <input type="number" value={itemQuantity} placeholder="Enter the Item" onChange={(e) => setItemQuantity(+e.target.value)} />
            <button onClick={handleSubmit}>Add Item</button>
            <Store itemArray={itemArray} />
        </div>
    )
}

function Store({itemArray}) {
    return (
        <div className="item-container">
            {itemArray.map((item) => (
                <Items items={item} key={item.name} />
            ))}
        </div>
    )

}
function Items({ items }) {
    return (
            <ul className="item-ul" style={{listStyle: 'none',display:'inline'}}>
                <li>Name: {items.name}</li>
                <li>Price: {items.price}</li>
                <li>Stock: {items.quantity}</li>
            </ul>
    )
}

export default App
*/

// React Query

// import { useQuery } from '@tanstack/react-query';

//* Example of UseQuery and UseMutation
/*
function App() {

    return (
        <>
            <Todos />
        </>
    )
}


// Define the mutation function
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';


const fetchTitles = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
        throw new Error("Error fetching posts");
    }
    return response.json();
};

const createTitle = async (newPost) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newPost),
    });
    if (!response.ok) {
        throw new Error("Error creating post");
    }
    return response.json();
};

const Todos = () => {
    const [title, setTitle] = useState('');
    const queryClient = useQueryClient();

    const { data: titles = [], isLoading: isLoadingTitles, error: titlesError } = useQuery({
        queryKey: ['titles'],
        queryFn: fetchTitles,
    });

    const mutation = useMutation({
        mutationFn: createTitle,
        onSuccess: (data) => {
            queryClient.setQueryData(['titles'], (oldData) => {
                // Generate a unique id for the new post
                const newId = Math.max(...oldData.map(post => post.id), 0) + 1;
                const newPost = { ...data, id: newId };
                return [newPost, ...oldData];
            });
            setTitle('');
        },
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        mutation.mutate({ title });
    };

    if (isLoadingTitles) return <div>Loading titles...</div>;
    if (titlesError) return <div>Error loading titles: {titlesError.message}</div>;

    return (
        <div>
            <h2>Create New Title</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter title"
                    required
                />
                <button type="submit" disabled={mutation.isLoading}>
                    {mutation.isLoading ? 'Creating...' : 'Create Title'}
                </button>
            </form>
            {mutation.error && <p>Error: {mutation.error.message}</p>}
            {mutation.isSuccess && <p>Title created successfully!</p>}

            <h3>Existing Titles:</h3>
            <ul>
                {titles.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
};





export default App
*/

import { Provider } from "react-redux";
import store from "./store";
import Todo from "./components/decrement/todo";
export default function App() {
    return (
        <Provider store={store}>
            <Todo />
        </Provider>
    )
}