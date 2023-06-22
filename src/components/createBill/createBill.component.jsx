import { useState } from "react";

import ButtonDefault from "../UI/buttonDefault/buttonDefault.component";
import DropDownDefault from "../UI/dropDownDefault/dropDownDefault.component";
import InputDefault from "../UI/inputDefault/inputDefault.component";
import ShowBill from "../showBill/showBill.component";
/* --- Styles -- */
 import { ItemContainer } from "./creatingBill.style";
 import { NamesContainer } from "./creatingBill.style";

const CreateBill = () => {

    const [inputValue, setInputValue] = useState('');
    const [amount, selectAmount] = useState('')
    const [dropdownOptions, setDropDownOptions] = useState([]);
    const [selectedNames, setselectedNames] = useState([]);
    const [billData, setbillData] = useState([]);


    /* -- Adding names -- */
    const AddName = () => {
      if (inputValue.trim() !== ''){
        const optionValue = { label: inputValue, value: inputValue};
        setDropDownOptions([...dropdownOptions, optionValue]);
        setInputValue('');
    }
    }



    /* --- Selected items -- */
    // const handleSelected = () => {
    const handleSelected = (selectedList) => {
      setselectedNames((prevNames) => [...prevNames , ...selectedList]);
      // console.log(selectedNames)
    };


    /* --- Removed items -- */
    const handleRemoved = (removedList) => {
      // setselectedNames((prevNames) =>
      //   prevNames.filter((name) => !removedList.some((removed) => removed.value === name.value))
      // );
    };



    /* --- Handler for input -- */
    const onChangeHandler = (event) => {
      // console.log(event.target.value);
      setInputValue(event.target.value);
    }

    /* --- Handler for amount --- */
    const onChangeAmount = (event) => {
      console.log(event.target.value);
      selectAmount(event.target.value);
    }

    const showBill = () => {
      const selectedPersons = selectedNames.length;
      const devidedAmount = parseFloat(amount) / selectedPersons;
      const newBillData = selectedNames.map((option) => ({
        name: option.label,
        amount: devidedAmount
      }));
    
      setbillData(newBillData);
    };

    return (
        <div>
          <NamesContainer>
              {/* -- Input for adding names -- */}
              <InputDefault  
              type="text" 
              onChange={onChangeHandler} 
              value={inputValue} 
              placeholder='Name'
              />
              {/* -- Button for add -- */}
              <ButtonDefault title="Add person" onClick={AddName}></ButtonDefault>
          </NamesContainer>
       
          {dropdownOptions.length  > 0 && <ItemContainer>
            <>
            {/* --INPUT FOR AMOUNT -- */}
            <InputDefault 
              style={{ width:'10%', height:'30px'}} 
              type='text'
              onChange={onChangeAmount}
              value={amount}
              placeholder='Amount' 
            />
            {/* --DROPDOWN -- */}
            <DropDownDefault 
              options={dropdownOptions}
              onSelect={handleSelected}
              onRemove={handleRemoved}
            />
            </>
            {/* -- Button Show bill */}
            <ButtonDefault title='Show Bill' onClick={showBill}></ButtonDefault>
          </ItemContainer>
          }

          {/* -- Showing Bill --- */}
          <ShowBill billData={billData}></ShowBill>
        </div>
        
      );
}
 
export default CreateBill;