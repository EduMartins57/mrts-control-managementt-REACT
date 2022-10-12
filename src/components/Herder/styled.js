import styled from 'styled-components';

export const AreaHeader = styled.div`
    height: 60px;
    background-color: #2354DB;
    color: #fff;
    
    .container{
        padding: 5px 20px;
        display: flex;
        align-items: center;

    }
        .logo{
         flex: 1; 
         
            img{
                margin-top: 3px;
            }
        }
           
        nav{

            display: flex;

             ul{
                display: flex;
            }

                li{
                    list-style: none;
                    margin-left: 20px;
                    font-family: var(--font-destaque02);
                    margin-top: 7px;

                    a, .fa-sign-out{
                        text-decoration: none;
                        color: #fff;
                        font-size: 14px;

                        &:hover{
                            color: var(--cor1);
                            background-color: var(--cor2);
                            padding: 10px;
                            border-radius: 10px;
                            font-weight: bold;
                        }
                    }
                }
            
            .avatar{
                display:flex;
                align-items: center;

                img{
                    width: 35px;
                    border-radius: 20px;
                    margin-left: 20px;
                    margin-right: 10px;
                    cursor: pointer;
                }

                label{
                    font-size: 14px;
                    cursor: pointer;
                    font-family: var(--font-destaque02);
                }
            }

            @media screen and (max-width: 600px){
                width: 100%;
                label{
                    display: none;
                }
            }
        }

        @media screen and (max-width: 390px){
            width: 100%;
            .logo{
                width: 30%;
                margin-top: 0px;
            }

            .fa-sign-out{
                margin-left: -20px;
            }

        }

        
        @media screen and (max-width: 360px){
            width: 100%;
            .fa-sign-out{
                margin-left: -35px;
            }

            .imgLogo{
                height: 40px;
                padding-top: 5%;
                margin-top: 10px;
            }

        } 
`;