import random
import time

from agora_token_builder import RtcTokenBuilder
from django.http import JsonResponse
from django.shortcuts import render


def getToken(request):
    appId = "c3dfe7dfb0b34716a26cdb0eaaa02475"
    appCertificate = "dd3bce08f672448db9173c80088b6339"
    channelName = request.GET.get("channel")
    uid = random.randint(1, 230)
    expirationTimeInSeconds = 3600 * 24
    currentTimeStamp = time.time()
    privilegeExpiredTs = currentTimeStamp + expirationTimeInSeconds
    role = 1

    token = RtcTokenBuilder.buildTokenWithUid(
        appId, appCertificate, channelName, uid, role, privilegeExpiredTs
    )
    return JsonResponse({"token": token, "uid": uid}, safe=False)


def lobby(request):
    return render(request, "base/lobby.html")


def room(request):
    return render(request, "base/room.html")
