import React from 'react';
import * as Redux from 'react-redux';

import * as actions from 'actions';
import HeaderAndNav from 'HeaderAndNav';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RefreshIndicator from 'material-ui/RefreshIndicator';

const style = {
  container: {
    position: 'relative',
  },
  refresh: {
    display: 'inline-block',
    position: 'relative',
  },
};



export var CorporateHealthProApp = React.createClass({
  // componentWillMount:function()
  // {
  //   var {dispatch}=this.props;
  //   dispatch({type:"SET_REFRESH_INDICATOR_STATE",refreshIndicator:"loading"})
  // },
    onLogout(e) {
        var {dispatch} = this.props;
        e.preventDefault();

        dispatch(actions.startLogout());
    },
    render() {
        var props = this.props;
        const {isDeleteModalOpen} = this.props.corporate;
        const {refreshIndicator}=this.props.app;
        const {dispatch}=this.props;
      //  console.log(refreshIndicator);
        const actions = [
          < FlatButton label = "Cancel" primary = {
                true
            }
            onTouchTap = {
                () => {
                    dispatch({type: "SET_DELETE_MODAL_STATE", isDeleteModalOpen: false})
                }
            } />,
            < FlatButton label = "Submit" primary = {
                true
            }
            keyboardFocused = {
                true
            }
            onTouchTap = {
                () => {
                    dispatch({type: "SET_DELETE_MODAL_STATE", isDeleteModalOpen: false})
                }
            } />
        ];
      //  const loading=refreshIndicator;
        const renderBody=function()
        {
            if(refreshIndicator=="loading")
            {
                return (  <div className="text-center">
                               <div style={style.container}>
                                   <RefreshIndicator size={80} left={0} top={20} loadingColor="#FF9800" status={refreshIndicator} style={style.refresh}/>
                               </div>
                  </div> );
            }
            // else {
            //     return (
            //       <div className="text-center">
            //           <div style={style.container}>
            //               <RefreshIndicator size={80} left={0} top={20} loadingColor="#FF9800" status={refreshIndicator} style={style.refresh}/>
            //           </div>
            //       </div>
            //     )
            // }
        };
        return (
            <div>
                <div>
                    <HeaderAndNav/>
                      

                    <div>{props.children}</div>
                    {renderBody()}




                </div>
                <Dialog title="Delete" actions={actions} modal={false} open={isDeleteModalOpen} onRequestClose={() => {
                    dispatch({type: "SET_DELETE_MODAL_STATE", isDeleteModalOpen: false})
                }}>
                    The actions in this window were passed in as an array of React objects.
                </Dialog>
            </div>
        )
    }
});

export default Redux.connect((state) => {
    return {corporate:state.corporate,app:state.app};
})(CorporateHealthProApp);

// render() {
//   var props=this.props;
//     return (
//         <div>
//             <div>
//                 <HeaderAndNav/>
//                 <div id="page-wrapper">
//                   {props.children}
//                 </div>
//             </div>
//
//         </div>
//     )
// }
