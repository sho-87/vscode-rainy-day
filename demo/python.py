import numpy as np


class MyClass:
    def __init__(self, x):
        # single line comment
        self.x = x
    
    def test_method(self):
        print(self.x)


def my_function(p1, p2):
    """
    Description of my function
    """

    return (p1 * p2)


try:
    message = 'Welcome %s!' % ('user')
except Exception as ex:
    message = 'Error: {}'.format(ex)


new_class = MyClass('hello')
new_class.test_method()
