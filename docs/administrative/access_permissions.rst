.. _access_permissions:

=======================================
Group permissions for linked accounts
=======================================

Once Domain trust has been established
between the principal account and delegate accounts,
principal account administrators can create groups
and assign permissions.

Principal account administrative users can view
group permissions for their account.

Manage group permissions in the principal account
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

#. Log in to the `Rackspace Technology Customer Portal <https://login.rackspace.com>`_.

#. Select **Account > User Management** from the global navigation menu.

#. Select the **User groups** tab.

#. Use the Group permissions dropdown menu to
   navigate to linked accounts.

   .. image:: /_static/img/acct_groups.png
    :alt: **account switcher**

#. Select a trusting account and
   follow the steps to :ref:`manage your user groups<user_settings>`.

Additional product permissions are available for Federated Identity groups.
Select the the Federated Identity Users tab and choose from the available
options.

#. Toggle the switch to allow group members to create new AWS accounts.

      .. note::

      This option is only available for the principal account.

#. Select a default AWS IAM policy from the dropdown.

#. Edit additional product permissions.

.. image:: /_static/img/acct_products.png
    :alt: **account switcher**