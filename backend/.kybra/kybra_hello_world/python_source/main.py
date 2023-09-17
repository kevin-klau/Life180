from kybra import query, update, void, Opt, StableBTreeMap, Record, float32, Vec, ic

# This is a global variable that is stored on the heap
userPassw = StableBTreeMap[str, str](memory_id=3, max_key_size=1000, max_value_size=1000)
userScore = StableBTreeMap[str, int](memory_id=4, max_key_size=1000, max_value_size=1000)

# ADDING NEW USERS
@query
def verifyUser(user: str, passw: str) -> bool:
    global userPassw
    ic.print("\nUSER VERIFICATION")
    ic.print(user)
    ic.print(passw)
    if (userPassw.get(user) == passw):
        return True
    else:
        return False

@update
def createUser(user: str, passw: str) -> void:
    global userPassw
    ic.print("\nNEW USER CREATED")
    ic.print(user)
    ic.print(passw)
    userPassw.insert(user, passw)

# USER SCORES
@query
def getUserScore(id: str) -> int:
    global userScore
    ic.print("\nUSER SCORE GETTED CREATED")
    ic.print(id)

    score = userScore.get(id)
    if score == None:
        return 0
    else:
        return score

@update
def setIncrementUserScore(id: str) -> void:
    global userScore
    score = userScore.get(id)

    if score != None:
        score += 1
    else:
        score = 1
    userScore.insert(id, score)


@update
def setDecrementUserScore(id: str) -> void:
    global userScore
    score = userScore.get(id)

    if score != None:
        score -= 1
    else:
        score = -1
    userScore.insert(id, score)

"""
# Creating Smart Contract 
class locationContract(Record):
    id: str
    owner: str
    signatories: Vec[str]
    latitude: float32
    longitude: float32
    time: str
    duration: int
    startDate: str
    active: bool

contracts = StableBTreeMap[str, locationContract](memory_id=5, max_key_size=10, max_value_size=10)

@update
def signContract(user: str, id: str) -> bool:
    global contracts
    try:
        contracts[id]["signatories"].append(user)
        return True
    except KeyError:
        return False

@update
def createContract(user: str, longitude: float32, latitude: float32, time: str, duration: int) -> bool:
    pass
"""
