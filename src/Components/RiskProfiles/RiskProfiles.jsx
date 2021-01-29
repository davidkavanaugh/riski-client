import React, { useReducer, useEffect } from "react";
import {
  riskProfilesReducer,
  riskProfilesInitialState,
} from "../../reducers/RiskProfiles.reducer";
import { RiskProfilesContext } from "../../context";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@material-ui/core";
import EditRiskProfile from "./EditRiskProfile/EditRiskProfile";
import DeleteRiskProfile from "./DeleteRiskProfile/DeleteRiskProfile";
import NewRiskProfile from "./NewRiskProfile/NewRiskProfile";
import css from "./RiskProfiles.module.css";

const RiskProfiles = () => {
  const [state, dispatch] = useReducer(
    riskProfilesReducer,
    riskProfilesInitialState
  );
  const { allRiskProfiles } = state;

  useEffect(() => {
    dispatch({
      type: "GET_findAllRiskProfiles",
    });
  }, []);

  return (
    <RiskProfilesContext.Provider value={{ state, dispatch }}>
      <div className={css.wrapper}>
        {allRiskProfiles.length > 0 ? (
          <Table className={css.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Score</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allRiskProfiles.map((row, index) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row" className={css.score}>
                    <span
                      className={css.score}
                    >{`${row.minScore} - ${row.maxScore}`}</span>
                  </TableCell>
                  <TableCell>
                    <span className={css.title}>{row.title.toUpperCase()}</span>
                    : {row.description}
                  </TableCell>
                  <TableCell>
                    <span className={css.actions}>
                      <EditRiskProfile idx={index} />
                      <span className={css.spacer}></span>
                      <DeleteRiskProfile idx={index} />
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <div className={css.createNew}>
            <p>
              You haven't created any{" "}
              <span className={css.italic}>Risk Profiles.</span>
            </p>
          </div>
        )}
        <div className={css.createNew}>
          <NewRiskProfile />
        </div>
      </div>
    </RiskProfilesContext.Provider>
  );
};

export default RiskProfiles;
