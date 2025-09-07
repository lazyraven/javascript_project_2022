console.log(
  "------------------------- CLASS INHERITANCE RESULT  ------------------------"
);
// real-world examples (like User → AdminUser → SuperAdminUser)

// 🔹 Example: User System
// 1. Base Class: User
class UserInfo {
  constructor(username, email) {
    this.username = username;
    this.email = email;
  }
  login() {
    console.log(`${this.username} log in with this ${this.email}.`);
  }
  logout() {
    console.log(`${this.username} logout.`);
  }
}
// 2. AdminUser (inherits from User)
class AdminUser extends UserInfo {
  constructor(username, email, role) {
    super(username, email); // Call parent constructor
    this.role = role;
  }
  deleteUser(user) {
    console.log(`${this.username} deleted user ${user.username}.`);
  }
}
// 3. SuperAdminUser (inherits from AdminUser)
class SuperAdminUser extends AdminUser {
  constructor(username, email, role, level) {
    super(username, email, role);
    this.level = level;
  }
  manageAdmins() {
    console.log(
      `${this.username} (Level ${this.level}) can manage other admins.`
    );
  }
}
// 4. Usage
const normalUser = new UserInfo("Nisha", "ny@gmail.com");
normalUser.login();

const admin = new AdminUser("Raj", "rj@gmail.com", "Admin");
admin.login();
admin.deleteUser(normalUser);

const superAdmin = new SuperAdminUser(
  "abc",
  "ab@gmail.com",
  "SuperAdmin",
  "Level1"
);
superAdmin.login();
superAdmin.manageAdmins();

// ✅ What you learned here:

// Class inheritance chain (User → AdminUser → SuperAdminUser).

// super() is used to reuse parent constructor.

// Child classes can add new methods or override existing ones.
