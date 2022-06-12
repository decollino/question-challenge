import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { listQuestions } from "../actions/questionsActions";

import {
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBRow,
  MDBCol,
  MDBContainer,
  MDBBtn,
  MDBPagination,
  MDBPaginationItem,
  MDBPaginationLink,
} from "mdb-react-ui-kit";

export default function QuestionsPage() {
  const dispatch = useDispatch();
  const questionList = useSelector((state) => state.questionList);
  const { loading, error, questions } = questionList;
  const questionCreate = useSelector((state) => state.questionCreate);
  const { success: successCreate } = questionCreate;

  const [pageNo, setPageNo] = useState(0);
  const [prevPagination, setPrevPagination] = useState(false);
  const [nextPagination, setNextPagination] = useState(false);

  useEffect(() => {
    dispatch(listQuestions(pageNo));
  }, [dispatch, successCreate, pageNo]);

  function pagination(actionPaginate) {
    console.log("pageNo: ", pageNo);
    console.log("questions.length: ", questions.length);
    if (actionPaginate === +1) {
      setPageNo(pageNo + 1);
      setPrevPagination(false);
      if (questions.length < 20) {
        setNextPagination(true);
      }
    } else {
      if (pageNo <= 0) {
        setPrevPagination(true);
      } else {
        setPageNo(pageNo - 1);
        setPrevPagination(false);
      }
      setNextPagination(false);
    }
  }

  return (
    <div>
      {console.log("QuestionPage: ", questions)}
      <div
        style={{
          textAlign: "center",
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
        }}
      >
        <MDBBtn color="dark">
          <Link to="/questions">Create Questions</Link>
        </MDBBtn>
      </div>

      <MDBContainer>
        <div style={{ marginTop: "30px" }}>
          <h2 className="text-center">Question Data</h2>
          <MDBRow>
            <MDBCol size="12">
              <MDBTable>
                <MDBTableHead dark>
                  <tr>
                    <th scope="col">Id.</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Observation</th>
                    <th scope="col">Date</th>
                  </tr>
                </MDBTableHead>
                {questions && questions.length === 0 ? (
                  <MDBTableBody className="align-center mb-0">
                    <tr>
                      <td colSpan={8} className="text-center mb-0">
                        No Data Found
                      </td>
                    </tr>
                  </MDBTableBody>
                ) : (
                  questions &&
                  questions.map((item, index) => (
                    <MDBTableBody key={index}>
                      <tr>
                        <th scope="row">{item._id}</th>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.observation}</td>
                        <td>{item.date}</td>
                      </tr>
                    </MDBTableBody>
                  ))
                )}
              </MDBTable>
            </MDBCol>
          </MDBRow>
        </div>
      </MDBContainer>
      <div
        style={{
          textAlign: "center",
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <MDBPagination
          style={{
            justifyContent: "center",
          }}
        >
          <MDBPaginationItem>
            <MDBBtn onClick={() => pagination(-1)} disabled={prevPagination}>
              Prev
            </MDBBtn>
          </MDBPaginationItem>
          <MDBPaginationItem>
            <MDBPaginationLink>{` <  ${pageNo + 1}  > `}</MDBPaginationLink>
          </MDBPaginationItem>
          <MDBPaginationItem>
            <MDBBtn onClick={() => pagination(+1)} disabled={nextPagination}>
              Next
            </MDBBtn>
          </MDBPaginationItem>
        </MDBPagination>
      </div>
    </div>
  );
}
