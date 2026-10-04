import React,{useState} from 'react'
import Card from './components/card';
import Input from './components/input';
import Button from './components/button';

const App = () => {
  const [inputText,setInputText]=useState('');
  const [submittedData,setSubmittedData]=useState('');

  const handleFormsubmit =(e)=>{
    e.preventDefault();
    if(!inputText.trim())return; 
    setSubmittedData(inputText);
    setInputText('');
  };

  const handleClear =()=>{
    setSubmittedData('');
  };
  return (
    <main className='min-h-screen bg-slate-50 flex items-center justify-center p-4'>
      <Card title="Day 2 Task" subtitle="Tailwind CSS & Arrow Functions Component Demo">
        <form onSubmit={handleFormsubmit} className='space-y-4'>
          <Input
            label="User Name / Message"
            placeholder="Type anything here..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            required
            />
          <Button text="Submit Now" type="submit" variant="primary" />
        </form>
      </Card>
    </main>
    
  );
}

export default App