<?php

// Debug des données reçues
// print_r($_POST);exit;

// Renvoyer (afficher) une réponse au format JSON

// Je prépare le JSON en créant un tableau associatif
// contenant les données que je veux retourner (afficher)
$arrayForResponse = [
    'presentation' => "Bonjour {$_POST['firstName']} {$_POST['lastName']}"
];

// Je dis au navigateur que la réponse est en JSON
header('Content-Type: application/json');

// J'affiche la version encodée en JSON du tableau associatif
// JSON_PRETTY_PRINT => pour formater le code afin qu'un humain le comprenne
echo json_encode($arrayForResponse, JSON_PRETTY_PRINT);