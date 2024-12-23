
'use client';
import React from 'react';
import Link from 'next/link';


const PrivacyPolicy = () => {
    return (
<div className='relative p-6 text-white'>
        <h1 className="text-2xl font-bold mb-4 text-red-400">Datenschutzerklärung</h1>
        <h2 className="text-xl font-semibold mb-3">Einleitung</h2>
        <p className="mb-4">
            Der Schutz Ihrer persönlichen Daten ist uns besonders wichtig. Diese Datenschutzerklärung
            erläutert, wie wir Ihre Informationen gemäß der Datenschutz-Grundverordnung (DSGVO) und anderen relevanten
            Datenschutzgesetzen in Deutschland erheben, verwenden und schützen.
        </p>
        <h2 className="text-xl font-semibold mb-3">Datenerhebung und Nutzung</h2>
        <p className="mb-4">
            Wir erheben personenbezogene Daten zu Authentifizierungszwecken mithilfe von Firebase.
            Dazu gehören Ihre E-Mail-Adresse, Ihr Anzeigename und Ihr Profilbild, wenn Sie sich mit Google anmelden. Außerdem
            verwenden wir localStorage, um Ihre Sitzung aufrechtzuerhalten und eine erneute Authentifizierung beim Aktualisieren
            der Seite zu vermeiden.
        </p>
        <h2 className="text-xl font-semibold mb-3">Rechtsgrundlage</h2>
        <p className="mb-4">
            Wir verarbeiten Ihre Daten gemäß Art. 6 Abs. 1 lit. b DSGVO, der die Verarbeitung von Daten
            erlaubt, die zur Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen erforderlich sind. Durch die Anmeldung stimmen
            Sie dieser Verarbeitung gemäß Art. 6 Abs. 1 lit. a DSGVO zu.
        </p>
        <h2 className="text-xl font-semibold mb-3">Dienste von Drittanbietern</h2>
        <p className="mb-4">
            Diese Website verwendet Firebase, einen Dienst von Google LLC. Firebase übernimmt die
            Authentifizierung und kann Ihre Daten in Rechenzentren in der Europäischen Union speichern. Weitere Informationen
            finden Sie in der Datenschutzerklärung von Firebase.
        </p>
        <h2 className="text-xl font-semibold mb-3">Ihre Rechte</h2>
        <div className="mb-4">
            Gemäß der DSGVO haben Sie folgende Rechte:
            <ul className="list-disc ml-6">
                <li>Das Recht auf Zugang zu Ihren Daten (Art. 15 DSGVO)</li>
                <li>Das Recht auf Berichtigung falscher Daten (Art. 16 DSGVO)</li>
                <li>Das Recht auf Löschung Ihrer Daten (Art. 17 DSGVO)</li>
                <li>Das Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                <li>Das Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
                <li>Das Recht auf Widerspruch gegen die Datenverarbeitung (Art. 21 DSGVO)</li>
            </ul>
        </div>
        <h2 className="text-xl font-semibold mb-3">Speicherdauer</h2>
        <p>
            Ihre Daten werden nur so lange gespeichert, wie es zur Erfüllung ihres Zwecks oder gesetzlich
            vorgeschrieben ist. Wenn Sie sich abmelden oder Ihr Konto löschen, werden Ihre Daten umgehend gelöscht.
        </p>
        <h2 className="text-xl font-semibold mb-3">Kontakt</h2>
        <p className="mb-4">
            Wenn Sie Fragen oder Bedenken zu dieser Datenschutzerklärung haben, kontaktieren Sie uns
            bitte unter:
            <br />
        <strong>Email: </strong>
        <Link href="https://linktr.ee/ColdByDefault"
        rel="noopener noreferrer"
        target="_blank"
        className="text-blue-600 underline">
        LinkTree
        </Link>
        </p>
    </div>
    );
};

export default PrivacyPolicy;
