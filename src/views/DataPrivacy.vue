<script setup>
import FooterPers from "@/components/FooterPers.vue";
</script>

<template>
  <h1 class="headline">Datenschutz</h1>
  <div class="company">
  <h2>1. Erfassung und Verwendung von Daten</h2>

  <h3>1.1 Automatisch erfasste Daten</h3>
  <p>Bei jedem Besuch unserer Website werden automatisch bestimmte Daten erfasst und in den Serverprotokollen gespeichert.
    Diese Daten können Ihre IP-Adresse, Browsertyp, Betriebssystem, Verweisquelle, aufgerufene Seiten und Datum/Uhrzeit
    des Zugriffs umfassen. Diese Informationen werden anonymisiert verwendet, um die Nutzung unserer Website zu analysieren und zu verbessern.</p>

  <h3>1.2 Cookies</h3>
  <p>Wir verwenden Cookies, um bestimmte Informationen zu speichern und auf Ihrem Gerät abzurufen. Cookies sind kleine Textdateien,
    die von unserer Website an Ihren Browser gesendet und auf Ihrem Gerät gespeichert werden. Sie ermöglichen es uns, Sie bei
    zukünftigen Besuchen zu erkennen und Ihre bevorzugten Einstellungen zu speichern. Sie können die Verwendung von Cookies in
    den Einstellungen Ihres Browsers deaktivieren, jedoch kann dies zu Einschränkungen bei der Nutzung unserer Website führen.</p>

  <h3>1.3 Kontaktformular</h3>
  <p>Wenn Sie unser Kontaktformular verwenden, um mit uns in Verbindung zu treten, erfassen wir die von Ihnen bereitgestellten Informationen,
    einschließlich Ihres Namens, Ihrer E-Mail-Adresse und Ihrer Nachricht. Diese Informationen werden verwendet, um Ihre Anfrage zu bearbeiten und zu beantworten.</p>

  <h2>2. Datenweitergabe</h2>
  <p>Wir geben Ihre persönlichen Daten nicht an Dritte weiter, es sei denn, dies ist gesetzlich vorgeschrieben oder erforderlich, um Ihre Anfrage zu bearbeiten.</p>

  <h2>3. Datensicherheit</h2>
  <p>Wir ergreifen angemessene technische und organisatorische Maßnahmen, um Ihre Daten vor Verlust, Missbrauch oder unbefugtem Zugriff zu schützen.
    Wir verwenden sichere Übertragungsverfahren (SSL) für die Übermittlung sensibler Daten.</p>

  <h2>4. Ihre Rechte</h2>
  <p>Sie haben das Recht, auf Anfrage Auskunft über die von uns über Sie gespeicherten personenbezogenen Daten zu erhalten.
    Sie können auch die Berichtigung oder Löschung Ihrer Daten verlangen. Bitte kontaktieren Sie uns über die unten angegebenen Kontaktdaten,
    um Ihre Rechte auszuüben.</p>

  <h2>5. Änderungen dieser Datenschutzerklärung</h2>
  <p>Wir behalten uns das Recht vor, diese Datenschutzerklärung jederzeit zu ändern. Bitte überprüfen Sie diese Seite regelmäßig, um über Aktualisierungen informiert zu bleiben.</p>

  <h2>6. Kontakt</h2>
  <p>Wenn Sie Fragen oder Bedenken hinsichtlich dieser Datenschutzerklärung haben, kontaktieren Sie uns bitte unter:</p>

  <ul>
    <li>JusteEnough</li>
    <li>Adresstraße -13</li>
    <li>email@adresse.justenough</li>
    <li>0152 briwad0467</li>
  </ul>
  </div>
  <FooterPers/>
</template>

<style scoped>
body {
  font-family: "Open Sans", sans-serif;
  margin: 20px;
}

.company {
  margin: 50px;
  padding: 20px;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0px 3px 3px #ccc;
}

.company h2, .company h3, .company h1{
  text-align: center;
  margin-top: 40px;
}

.company p, .content p{
  margin: 10px;
  line-height: 1.5;
}

.headline {
  text-align: center;
  margin-top: 20px;
}
</style>