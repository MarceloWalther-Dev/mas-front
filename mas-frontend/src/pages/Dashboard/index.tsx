import { Header } from "../../components/Header";
import {ActivyTable} from "../../components/ActivyTable";
import {Summary} from "../../components/Summary";
import {Container} from "./styles";

export function Dashboard(){
    return(
        <>
            <Header/>
            <Container>
                <Summary/>
                <ActivyTable/>
            </Container>
        </>
    )
}