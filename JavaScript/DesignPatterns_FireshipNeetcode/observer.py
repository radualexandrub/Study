"""
YoutubeChannel class maintains a list
of subscribers
"""
from abc import ABC, abstractmethod


class YoutubeChannel:
    def __init__(self, name):
        """
        When new user subscribes,
        we add it to list of subscribers
        """
        self.name = name
        self.subscribers = []

    def subscribe(self, sub):
        """
        When an event occurs,
        send the event data to each of the subscribers
        """
        self.subscribers.append(sub)

    def notify(self, event):
        for sub in self.subscribers:
            sub.sendNotification(self.name, event)


class YoutubeSubscriber(ABC):
    @abstractmethod
    def sendNotification(self, event):
        pass


class YoutubeUser(YoutubeSubscriber):
    def __init__(self, name):
        self.name = name

    def sendNotification(self, channel, event):
        print(f"User {self.name} received notification from {channel}: {event}")


if __name__ == "__main__":
    channel = YoutubeChannel("neetcode")

    channel.subscribe(YoutubeUser("sub1"))
    channel.subscribe(YoutubeUser("sub2"))
    channel.subscribe(YoutubeUser("sub3"))

    channel.notify("A new video released")

# User sub1 received notification from neetcode: A new video released
# User sub2 received notification from neetcode: A new video released
# User sub3 received notification from neetcode: A new video released
