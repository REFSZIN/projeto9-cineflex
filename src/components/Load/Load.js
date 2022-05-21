import styled from "styled-components";
import loader from "../../assets/images/loader.gif";

export default function Load(){
    return(
        <Loadin >
            <Loaded src={loader} alt="Loader"/>
        </Loadin>
    );
};

export const Loadin = styled.section`
    display: flex;
    align-content: center;
    display padding-bottom: 120px;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: column;
    padding-bottom: 120px;
    margin-top: 50%;
`
export const Loaded = styled.img`
    object-fit: cover;
    width: 320px;
    heigth: 50vh;
    margin: 10%;
`