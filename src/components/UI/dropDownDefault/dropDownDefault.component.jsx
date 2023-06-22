import Multiselect from "multiselect-react-dropdown";

const DropDownDefault = ({ options, onSelect, onRemove }) => {
    return (
        <Multiselect
          options={options}
          placeholder="Select Names"
          displayValue="label"
          onSelect={onSelect}
          onRemove={onRemove}
        />
    );
  };
 
export default DropDownDefault;

