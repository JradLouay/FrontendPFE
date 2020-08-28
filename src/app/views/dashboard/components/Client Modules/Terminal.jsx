import React from 'react'
import { XTerm } from 'xterm-for-react'
import { FitAddon } from 'xterm-addon-fit'
const fitAddon = new FitAddon();



     const Terminal = (props) => {

        fitAddon.fit();
        const xtermRef = React.useRef(null)
        const {
            feedback
          }= props;
        
        React.useEffect(() => {

            if (feedback) {
                xtermRef.current.terminal.writeln(feedback);
            } 
            return () =>{
                console.log('cleanup');
            }
        }, [feedback])

        return (
            <XTerm
                      ref={xtermRef}
                      addons={[fitAddon]} 
                      />
                     )
    }
export default Terminal