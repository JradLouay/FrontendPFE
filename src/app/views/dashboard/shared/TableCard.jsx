import React from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import {
  Card,
  Icon,
  IconButton,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody
} from "@material-ui/core";
import {
  getModulesStats,
  cleanModuleStats
} from "app/redux/actions/ModuleActions";

const TableCard = (props) => {
  
  const {
    globalClient,
    modulesStats,
    getModulesStats,
    cleanModuleStats
          }=props;

  // const [states, setStates] = React.useState([]);
 
  React.useEffect(() => {
  //   axios.get(`http://localhost:9000/api/deploys/stats/${globalClient.id}`).then(res => {
  //     setStates(res.data);
  //     console.log("result stats", res.data);
  //     return function cleanup() {
  //       console.log("cleanup");
  //       setStates([]);
  //     };
  // });
  getModulesStats(globalClient.id);
  return function cleanup() {
          console.log("cleanup");
          cleanModuleStats();
        };
  
  }, [globalClient]);
  
  return (
    <Card elevation={3} className="pt-20 mb-24">
      <div className="card-title px-24 mb-12">deployed Modules</div>
      <div className="overflow-auto">
       {
        modulesStats.length <= 1 ? ( 
          // spinner for loading stats of services  
          ""
        ):
        (<Table className="product-table">
          <TableHead>
            <TableRow>
              <TableCell className="px-24" colSpan={1}>
                Name
              </TableCell>
              <TableCell className="px-0" colSpan={1}>
                Created At
              </TableCell>
              <TableCell className="px-0" colSpan={1}>
                Ports
              </TableCell>
              <TableCell className="px-0" colSpan={1}>
                Running For
              </TableCell>
              <TableCell className="px-0" colSpan={1}>
                Status
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {modulesStats.map((product, index) => (
              <TableRow key={index}>
                <TableCell className="px-0 capitalize" colSpan={1} align="left">
                  <div className="flex flex-middle">
                    {/* <img
                      className="circular-image-small"
                      src={product.imgUrl}
                      alt="user"
                    /> */}
                    <p className="m-0 ml-8">{product.Names}</p>
                  </div>
                </TableCell>
                <TableCell className="px-0 capitalize" align="left" colSpan={1}>
                  
                  {product.CreatedAt }
                </TableCell>
                <TableCell className="px-0 capitalize" align="left" colSpan={1}>
                  {product.Ports}
                </TableCell>

                <TableCell className="px-0" align="left" colSpan={1}>
                  {product.RunningFor }
                </TableCell>
                <TableCell className="px-0" colSpan={1}>
                  {product.Status}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>)
        }
      </div>
    </Card>
  );
};
const mapStateToProps = (state) => ({
  globalClient : state.client.globalClient,
  modulesStats : state.module.modulesStats,
  getModulesStats : PropTypes.func.isRequired, 
  cleanModuleStats : PropTypes.func.isRequired, 
});

export default   connect(
  mapStateToProps,
  {
    getModulesStats,
    cleanModuleStats
  }
)(TableCard);
