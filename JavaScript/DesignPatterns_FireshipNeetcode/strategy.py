# https://docs.python.org/3/library/abc.html#module-abc - Abstract Base Classes
from abc import ABC, abstractmethod


class FilterStrategy(ABC):
    @abstractmethod
    def removeValue(self, val):
        pass


class RemoveNegativeStrategy(FilterStrategy):
    def removeValue(self, val):
        return val < 0


class RemoveOddStrategy(FilterStrategy):
    def removeValue(self, val):
        return abs(val) % 2


class Values:
    def __init__(self, vals):
        self.vals = vals

    def filter(self, strategy):
        res = []
        for n in self.vals:
            if not strategy.removeValue(n):
                res.append(n)
        return res


if __name__ == "__main__":
    values = Values([-7, -4, -1, 0, 2, 5, 9])

    print(values.filter(RemoveNegativeStrategy()))  # [0, 2, 5, 9]
    print(values.filter(RemoveOddStrategy()))  # [-4, 0, 2]
