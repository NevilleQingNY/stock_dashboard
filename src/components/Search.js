import { Form, Button, Row, Col, Container } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";

const Search = ({ searchStringUpdated }) => {
    const submitSearchString = (event) => searchStringUpdated(event.target.value);

    return (
        <Container>
            <Form
                onSubmit={(event) => event.preventDefault()}
                className="mt-2 mb-4"
            >
                <Row>
                    <Col xs={11}>
                        <Form.Control
                            type="text"
                            placeholder="Search by Symbol..."
                            onChange={submitSearchString}
                        />
                    </Col>
                    <Col xs={1}>
                        <Button variant="primary" type="submit">
                            <BsSearch />
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    )
}

export default Search;