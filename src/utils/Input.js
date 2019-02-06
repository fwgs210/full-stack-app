import styled from 'styled-components'

export const InputGroup = styled.label`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 0 20px;
  align-items: center;
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

export const LineButton = styled.button`
    width: 100%;
    background: none;
    border: none;
    color: #999;
    text-decoration: underline;
    font-size: inherit;
    font-weight: 500;
    line-height: inherit;
    text-transform: uppercase;
    cursor: pointer;
    margin: 20px 10px 5px;
    text-align: center;
    display: inline-block;
`

export const WhiteLink = styled.a.attrs({ type: 'button' })`
    width: 100%;
    background: none;
    border: none;
    color: #fff;
    font-size: inherit;
    font-weight: 100;
    line-height: inherit;
    cursor: pointer;
    margin: 20px 10px 5px;
    text-align: center;
    display: inline;
`