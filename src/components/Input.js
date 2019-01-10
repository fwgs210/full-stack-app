import styled from 'styled-components'

export const InputGroup = styled.label`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 0 20px;
`

export const InputLabel = styled.label`
  width:100%;
  display: block;
  margin: 0 0 10px;
  color: rgba(0, 0, 0, 0.6);
  font-size: 12px;
  font-weight: 500;
  line-height: 1;
  text-transform: uppercase;
  letter-spacing: .2em;
`

export const InputField = styled.input`
  width:100%;
  outline: none;
  display: block;
  background: rgba(0, 0, 0, 0.1);
  border: 0;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 12px 20px;
  color: rgba(0, 0, 0, 0.6);
  font-family: inherit;
  font-size: inherit;
  font-weight: 500;
  line-height: inherit;
  transition: 0.3s ease;
`

export const InputTextarea = styled.textarea`
    width: 100%;
    outline: none;
    display: block;
    background: rgba(0, 0, 0, 0.1);
    border: 0;
    border-radius: 4px;
    box-sizing: border-box;
    padding: 12px 20px;
    color: rgba(0, 0, 0, 0.6);
    font-family: inherit;
    font-size: inherit;
    font-weight: 500;
    line-height: inherit;
    transition: 0.3s ease;
    height: 6rem;
`

export const InputButton = styled.button`
    outline: none;
    background: #4285F4;
    width: 100%;
    border: 0;
    border-radius: 4px;
    padding: 12px 20px;
    color: #FFFFFF;
    font-family: inherit;
    font-size: inherit;
    font-weight: 500;
    line-height: inherit;
    text-transform: uppercase;
    cursor: pointer;
`