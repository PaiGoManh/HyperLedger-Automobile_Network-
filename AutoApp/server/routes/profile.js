let profile = {
    manufacturer: {
        "cryptoPath": "../../Automobile/organizations/peerOrganizations/manufacturer.auto.com", 
		"keyDirectoryPath": "../../Automobile/organizations/peerOrganizations/manufacturer.auto.com/users/User1@manufacturer.auto.com/msp/keystore/",
        "certPath":     "../../Automobile/organizations/peerOrganizations/manufacturer.auto.com/users/User1@manufacturer.auto.com/msp/signcerts/cert.pem",
		"tlsCertPath":  "../../Automobile/organizations/peerOrganizations/manufacturer.auto.com/peers/peer0.manufacturer.auto.com/tls/ca.crt",
		"peerEndpoint": "localhost:7051",
		"peerHostAlias":  "peer0.manufacturer.auto.com",
        "mspId": "ManufacturerMSP"
    },
    dealer: {
        "cryptoPath": "../../Automobile/organizations/peerOrganizations/dealer.auto.com", 
		"keyDirectoryPath": "../../Automobile/organizations/peerOrganizations/dealer.auto.com/users/User1@dealer.auto.com/msp/keystore/",
        "certPath":     "../../Automobile/organizations/peerOrganizations/dealer.auto.com/users/User1@dealer.auto.com/msp/signcerts/cert.pem",
		"tlsCertPath":  "../../Automobile/organizations/peerOrganizations/dealer.auto.com/peers/peer0.dealer.auto.com/tls/ca.crt",
		"peerEndpoint": "localhost:9051",
		"peerHostAlias":  "peer0.dealer.auto.com",
        "mspId": "DealerMSP"
    },
    mvd: {
        "cryptoPath": "../../Automobile/organizations/peerOrganizations/mvd.auto.com", 
		"keyDirectoryPath": "../../Automobile/organizations/peerOrganizations/mvd.auto.com/users/User1@mvd.auto.com/msp/keystore/",
        "certPath":     "../../Automobile/organizations/peerOrganizations/mvd.auto.com/users/User1@mvd.auto.com/msp/signcerts/cert.pem",
		"tlsCertPath":  "../../Automobile/organizations/peerOrganizations/mvd.auto.com/peers/peer0.mvd.auto.com/tls/ca.crt",
		"peerEndpoint": "localhost:11051",
		"peerHostAlias":  "peer0.mvd.auto.com",
        "mspId": "MvdMSP"
    }
}
module.exports = { profile }
