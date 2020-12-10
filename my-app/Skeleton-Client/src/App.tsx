import React, {useEffect, useState} from 'react';
import {Blue6} from "./Blue6Interfaces";
import Logo from "./Logo.svg";
import './index.css'
import './App.css'


const makeBlankBlue6 = (): Blue6 => ({
    reportingDate: "",
    callSign: "",
    spDate: "",
    rp: "",
    cpLocation: "",
    eta: "",
    siUp: "",
    narrative: "",
    pointOfContact: "",
});

const createBlue6 = () => {
    const [Blue6, setBlue6] = useState<Blue6>(makeBlankBlue6());
}

export const App = () => {
    return (
        <>
            <div className="App">
                <header className="App-header">
                    <h1 className="body">
                        Lancer Brigade Operations Center
                    </h1>
                    <img src={Logo} className="App-logo" alt="logo"/>

                </header>
            </div>
            {/*return (*/}
            {/*<>*/}
            {/*    <TaskForm*/}
            {/*        label="Add a Task to the Task List"*/}
            {/*        task={task}*/}
            {/*        onTaskChanged={setTask}*/}
            {/*        assignableSoldiers={assignableSoldiers}*/}
            {/*    />*/}

            {/*    {task.subtasks.map((subtask, index) => (*/}
            {/*        <div className="subtask-form-container" key={index}>*/}
            {/*            <TaskForm*/}
            {/*                label="Add a Sub-Task"*/}
            {/*                task={task.subtasks[index]}*/}
            {/*                onTaskChanged={changeSubtask(index)}*/}
            {/*                assignableSoldiers={assignableSoldiers}*/}
            {/*            />*/}
            {/*        </div>*/}
            {/*    ))}*/}

            {/*    <div className="button-holder">*/}
            {/*        <Button onClick={handleAddSubTaskClick}>Add Sub-Task</Button>*/}

            {/*        <Button variant="completion" onClick={handleDoneClick} type="submit" disabled={!task.title}>*/}
            {/*            Done*/}
            {/*        </Button>*/}
            {/*    </div>*/}
            {/*</>*/}
            );
        </>
    )
}
