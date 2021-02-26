.. _access_permissions:

===============================
Permissions for linked account
===============================

Once Domain trust has been established
between the principal account and delegate accounts,
principal account administrators assign permissions and
create groups.

Principal account administrative users can view
group and product permissions for the principal account.
Administrators
are not able to manage users and groups that exist only in the
delegate account.

Manage permissions for groups in the principal account
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Use the dropdown menu in the Group permissions section to
navigate to linked accounts.

Changes to the principal account group permissions
impact how group members can interact with trusted accounts
but are not made within these accounts.

Once you have switched to a trusting account,
follow the steps to manage groups.


Product permissions
~~~~~~~~~~~~~~~~~~~~~~

Additional product permissions are available for Federated Identity users.
Select the the Federated Identity Users tab to view these permissions.

#. Toggle the switch to allow group members to create new AWS account permissions in the group.

#. Select a default AWS IAM policy from the dropdown.

#. Edit additional product permissions.

.. image:: /_static/img/acc_switcher.png
    :alt: **account switcher**


