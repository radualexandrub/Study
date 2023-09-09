import copy

# Prototype base class
class DocumentPrototype:
    def clone(self):
        return copy.deepcopy(self)

    def display(self):
        pass

# Concrete prototype 1: Letter
class Letter(DocumentPrototype):
    def __init__(self, recipient, content):
        self.recipient = recipient
        self.content = content

    def display(self):
        print("Letter to:", self.recipient)
        print("Content:", self.content)

# Concrete prototype 2: Memo
class Memo(DocumentPrototype):
    def __init__(self, subject, content):
        self.subject = subject
        self.content = content

    def display(self):
        print("Memo - Subject:", self.subject)
        print("Content:", self.content)

# Concrete prototype 3: Report
class Report(DocumentPrototype):
    def __init__(self, title, data):
        self.title = title
        self.data = data

    def display(self):
        print("Report - Title:", self.title)
        print("Data:", self.data)

# Prototype manager
class DocumentManager:
    def __init__(self):
        self.prototypes = {}

    def add_prototype(self, name, prototype):
        self.prototypes[name] = prototype

    def get_document(self, name):
        return self.prototypes[name].clone()

if __name__ == "__main__":
    manager = DocumentManager()

    # Create and register document prototypes
    letter_proto = Letter("John Doe", "Hello, John!")
    memo_proto = Memo("Meeting Agenda", "Discuss project progress.")
    report_proto = Report("Quarterly Report", "Sales data and analysis.")

    manager.add_prototype("Letter", letter_proto)
    manager.add_prototype("Memo", memo_proto)
    manager.add_prototype("Report", report_proto)

    # Create new documents based on prototypes
    new_letter = manager.get_document("Letter")
    new_memo = manager.get_document("Memo")
    new_report = manager.get_document("Report")

    # Display the created documents
    new_letter.display()
    new_memo.display()
    new_report.display()

# Output
# Letter to: John Doe
# Content: Hello, John!
# Memo - Subject: Meeting Agenda
# Content: Discuss project progress.
# Report - Title: Quarterly Report
# Data: Sales data and analysis.