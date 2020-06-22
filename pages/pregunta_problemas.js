import React from 'react';
import Head from 'next/head';
import QuestionProblem from '../components/Help/QuestionProblem/QuestionProblem';

export default function pregunta_problemas() {
    return (
        <div>
            <Head>
                <title>Kiero | Anular cuenta</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <QuestionProblem />
        </div>
    )
}
