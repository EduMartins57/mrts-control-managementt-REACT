import styled from "styled-components";

export const AreaLogin = styled.div`
    background-color: #fff;
    padding: 30px;
    max-width: 330px;
    margin: auto;
    margin-top: 20px;
    text-align: center;
    border-radius: 5px;
    box-shadow: 0px 0px 10px #000;
    height: 29em;

    h1{
        font-size: 25px;
        color: var(--cor1);
        font-family: var(--font-destaque01);
        margin: -10px;
        padding: 15px;
    }

    .organize{
        display: flex;
        
        a{
            color: #000;
        }

        .seta{
            color: var(--cor1);
        }
    }

    p{
        font-size: 13px;
        font-family: var(--font-destaque02);
        padding: 5px;
    }

    .form-imput{
        text-align: left;
    
        label{
            display: block;
            font-family: var(--font-destaque02);
            font-size: 15px;
            text-indent: 1px;
        }
    
        input{
            margin-bottom: 20px;
            padding: 10px;
            font-size: 16px;
            outline: none;
            border: 1px solid #ccc;
            border-radius: 5px;
            width: 280px;
            transition: 0.3s;
    
            &:hover{
                border: 1px solid var(--cor1);
            }

            .FaRegEye{
                position: relative;
                top: -46px;
                right: -150px;
                cursor: pointer;
            }
        }
    }
        .footerLogin{
            font-size: 13px;
            font-family: var(--font-destaque02);

            a{
                font-weight: bold;
                margin-left: 5px;
                color: var(--cor1);
                transition: 0.4s;
                cursor: pointer;

                &:hover{
                   color: var(--cor1);
                }
            }
        } 
`;