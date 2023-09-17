from flask import Flask, request
from flask_restful import Api, Resource, reqparse

from web3 import Web3

# Web3 SetUp
ganache_url = "http://127.0.0.1:7545"
web3 = Web3(Web3.HTTPProvider(ganache_url))

# FLASK API SETUP
app = Flask(__name__)
api = Api(app)

# API Resources
class User(Resource):
    def get(self, public):
        balance_wei = web3.eth.getBalance(public)
        balance_eth = web3.fromWei(balance_wei, 'ether')
        return {"balance": balance_eth}


signatories = {}

class Contract(Resource):
    def get(self, public, private):
        global signatories
        if private in signatories.values():
            return { "signatories": signatories.keys() }, 200
        return 404
            
    def post(self, public, private):
        global signatories
        signatories[public] = private
        return 200
        
    def put(self, public, private): # Winner is Determined
        global signatories

        if public in signatories.keys() and private in signatories.values():
            hashes = []

            # Begins to Send Money To Winner
            for publicKey in signatories:
                nonce = web3.eth.getTransactionCount(publicKey)
                tx = {
                    'nonce': nonce,
                    'to': public,
                    "value": web3.toWei(1, "ether"),
                    "gas": 2000,
                    "gasPrice": web3.toWei("50", "gwei")
                }
                signed_tx = web3.eth.account.signTransaction(tx, signatories[publicKey])
                tx_hash = web3.eth.sendRawTransactions(signed_tx.rawTransaction)
                hashes.append(web3.toHex(tx_hash))

            signatories = {}
            return {"hashes": hashes}, 200
        else:
            return 404

api.add_resource(User, "/user/<string:public>")
api.add_resource(Contract, "/contract/<string:public>/<string:private>")

app.run(host="0.0.0.0", port=3000)
