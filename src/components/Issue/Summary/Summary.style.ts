import styled from 'styled-components';

export const DatePickerStyle = styled.div`
  .react-datepicker {
    border: none;
    border-radius: 4px;
    background-color: #294c60;
    font-family: 'Cairo';
  }
  .react-datepicker__header {
    background-color: #001b2e;
  }
  .react-datepicker__current-month,
  .react-datepicker-time__header,
  .react-datepicker-year-header {
    color: #dcdfe5;
  }
  .react-datepicker__day-name,
  .react-datepicker__day,
  .react-datepicker__time-name {
    color: #dcdfe5;
    font-size: 1rem;
  }

  .react-datepicker__day:hover {
    color: #294c60;
    background-color: #adb6c4;
  }
  .react-datepicker__day--disabled:hover {
    background-color: transparent;
    color: #adb6c4;
  }
  .react-datepicker__day--disabled,
  .react-datepicker__month-text--disabled,
  .react-datepicker__quarter-text--disabled,
  .react-datepicker__year-text--disabled {
    cursor: default;
    color: #adb6c4;
    opacity: 0.5;
  }
  .react-datepicker__day--in-selecting-range:not(.react-datepicker__day--in-range, .react-datepicker__month-text--in-range, .react-datepicker__quarter-text--in-range, .react-datepicker__year-text--in-range) {
    background: #44ce42;
  }
  .react-datepicker__day--selected,
  .react-datepicker__day--in-range {
    background-color: #03a10a;
  }
  .react-datepicker__input-container {
    input {
      cursor: pointer;
      font-family: 'Cairo';
      border-radius: 4px;
      border: 1px solid #294c60;
      text-align: center;
      font-weight: bold;
      background-color: transparent;
      color: #294c60;
      :hover {
        background-color: #dcdfe5;
      }
      :focus {
        outline: none;
      }
    }
  }
  .react-datepicker__portal {
    left: 14em;
    width: calc(100% - 14em);
    @media (max-width: 40em) {
      left: 0;
      width: 100%;
    }
  }
`;
