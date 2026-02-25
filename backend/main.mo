import Map "mo:core/Map";
import Array "mo:core/Array";
import Runtime "mo:core/Runtime";
import Text "mo:core/Text";
import Order "mo:core/Order";
import Iter "mo:core/Iter";

actor {
  type ContactEntry = {
    name : Text;
    email : Text;
    message : Text;
  };

  module ContactEntry {
    public func compare(entry1 : ContactEntry, entry2 : ContactEntry) : Order.Order {
      switch (Text.compare(entry1.name, entry2.name)) {
        case (#equal) { Text.compare(entry1.email, entry2.email) };
        case (order) { order };
      };
    };
  };

  let contactEntries = Map.empty<Nat, ContactEntry>();
  var nextId = 0;

  public shared ({ caller }) func submitContactForm(name : Text, email : Text, message : Text) : async () {
    let entry : ContactEntry = {
      name;
      email;
      message;
    };

    contactEntries.add(nextId, entry);
    nextId += 1;
  };

  public query ({ caller }) func getContactEntry(id : Nat) : async ContactEntry {
    switch (contactEntries.get(id)) {
      case (null) { Runtime.trap("Contact entry does not exist") };
      case (?entry) { entry };
    };
  };

  public query ({ caller }) func getAllContactEntries() : async [ContactEntry] {
    contactEntries.values().toArray().sort();
  };
};
