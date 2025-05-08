import React, { ChangeEvent, useState } from 'react';
import Select from 'react-select';
import Image from 'next/image';

import {
  InputForm,
  InputLabel,
  InputWrapper,
  IconWrapper,
  SelectWrapper,
} from './style';
import { format } from 'date-fns';

const Input = ({
  placeholder,
  type,
  label,
  id,
  icon,
  select,
  options,
  width,
  onFocus,
  onBlur,
  onChange,
  value,
  valueDate,
  calendar,
  sendData,
}) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const customStyles = {
    valueContainer: (styles) => ({
      ...styles,
      padding: '6px 8px',
    }),
    control: (styles) => ({
      ...styles,
      border: `1px solid #E2E6E8`,
      borderRadius: '8px',
    }),
    placeholder: (styles) => ({
      ...styles,
      color: `#A0A7AB`,
    }),
  };

  const handleOnChange = (value) => {
    sendData && sendData(value);
  };

  const handleOnChangeInput = (e) => {
    onChange && onChange(e);
  };

  return (
    <>
      {label && <InputLabel>{label}</InputLabel>}
      <InputWrapper width={width}>
        {select ? (
          <SelectWrapper>
            <Select
              styles={customStyles}
              onChange={(value) => {
                setSelectedOption(value);
                handleOnChange(value);
              }}
              menuPlacement="auto"
              getOptionLabel={(option) => option.label}
              getOptionValue={(option) => option.value}
              options={options}
              value={selectedOption}
              placeholder={placeholder}
              components={{
                IndicatorSeparator: () => null,
              }}
              className="select"
            />
          </SelectWrapper>
        ) : calendar ? (
          <>
            <InputForm
              id={'calendar'}
              name={'calendar'}
              value={
                valueDate
                  ? valueDate.length > 1
                    ? `${format(valueDate[0], 'dd/MM')} - ${format(valueDate[1], 'dd/MM')}`
                    : format(valueDate[0], 'dd/MM')
                  : ''
              }
              type="text"
              onFocus={onFocus}
              onBlur={onBlur}
              onChange={handleOnChangeInput}
              readOnly={onChange ? false : true}
            />
            <IconWrapper>
              <Image src="/icons/date.svg" width={20} height={20} alt="Icon" />
            </IconWrapper>
          </>
        ) : (
          <>
            <InputForm
              id={id}
              name={id}
              placeholder={placeholder}
              value={value && value}
              type={type}
              onFocus={onFocus}
              onBlur={onBlur}
              onChange={handleOnChangeInput}
            />
            {icon && (
              <IconWrapper>
                <Image src={icon} width={20} height={20} alt="Icon" />
              </IconWrapper>
            )}
          </>
        )}
      </InputWrapper>
    </>
  );
};

export default Input;
