import React from 'react';

const ProgramDescription  = () => {
    function ProgramDescription(props){
        return <h2>Course Description: <p> {props.description}</p> </h2>
    }
    return (
        <div className='App h-6'>         
            <ProgramDescription description="Emerging Technologies provides students with an overview of the latest technological advancements and their potential impact on society."/>
            <ProgramDescription description="Enterprise System Integration is the process of integrating various business systems and processes within an organization to streamline operations and improve efficiency."/>
            <ProgramDescription description="AI for Software Developers is a specialized field that involves developing and implementing artificial intelligence algorithms and applications to solve complex computational problems."/>
            <ProgramDescription description="Data Structure and Algorithm is a fundamental course in computer science that teaches students how to design, analyze and implement efficient and effective methods for organizing and processing data."/>
        </div>
    );
};

export default ProgramDescription ;