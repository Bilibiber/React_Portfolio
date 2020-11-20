import styled from 'styled-components/macro'

export const Wrapper = styled.div`
  top: 40%;
  position: fixed;
  width: 140px;
  height: 140px;
  border-radius: 40px;
  text-align: center;
  cursor: pointer;
  background: transparent;
  margin: 20px;
  ${({ position }) => (position === 'right' ? 'right:0' : 'left:0')}
`

export const IconWrapper = styled.div`
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`
export const Icon = styled.button`
  font-size: 60px;
  cursor: pointer;
  outline: none;
  background: transparent;
  border: none;

  :disabled {
    cursor: not-allowed;
  }
`
