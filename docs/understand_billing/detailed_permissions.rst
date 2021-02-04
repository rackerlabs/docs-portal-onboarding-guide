.. detailed_permissions:

============================================
Permissions for billing and payment services
============================================

Review the following permissions matrix to understand the specific
billing and payment services capabilities for the following roles:

    - **Admin**: Provides full access to create, read, update, and delete.
    - **Observer**: Provides read-only access.

Billing services
~~~~~~~~~~~~~~~~

.. list-table::
   :widths: 30 35 35
   :header-rows: 1

   * - Capability
     - Role
     - Description
   * - List account balance
     - Observer, Admin
     - Returns the balance for the
       current account
   * - List billing summary
     - Observer, Admin
     - Returns the billing summary
       for the current account.
   * - List account currency
     - Observer, Admin
     - Returns the currency for the
       current account
   * - List account billing
       cycle
     - Observer, Admin
     - Returns the invoice for the
       current account, in PDF
       format.
   * - List current invoice
     - Observer, Admin
     - Returns the billing summary
       for the current account.
   * - List invoice by ID
     - Observer, Admin
     - Returns a specific invoice,
       in PDF format.
   * - List invoice payments
     - Observer, Admin
     - Returns a list of payments
       related to an invoice.
   * - List account payment
     - Observer, Admin
     - Lists a specific payment
       by ID.
   * - List refund by ID
     - Observer, Admin
     - Lists a specific refund.
   * - List billing periods
     - Observer, Admin
     - Returns a list of billing
       periods.
   * - List estimated charges
     - Observer, Admin
     - Returns a list of summarized
       estimated charges for a specific
       billing period.
   * - List subscriptions
     - Observer, Admin
     - Returns a list of subscriptions
       for the account.
   * - List contract entity
     - Observer, Admin
     - Retrieves a Rackspace Contract
       entity for a billing account.
   * - Create payment
     - Admin
     - Submits a payment for the
       balance owed by an account.
   * - Update account VAT
     - Admin
     - Updates the Value Added Tax
       (VAT) code for the account.
   * - List account VAT
     - Observer, Admin
     - Returns the Value Added Tax (VAT)
       code for the current account.
   * - Create account VAT
     - Admin
     - Creates a Value Added Tax (VAT)
       code for the current account.
   * - Delete account VAT
     - Admin
     - Deletes the Value Added Tax (VAT)
       code for a current account.


Payment services
~~~~~~~~~~~~~~~~
.. list-table::
   :widths: 30 35 35
   :header-rows: 1

   * - Capability
     - Role
     - Description
   * - Get payment method
     - Observer, Admin
     - Returns the payment method
       for the current account.
   * - Get default payment
     - Observer, Admin
     - Returns the default payment
       method for the  current account.
   * - Create payment method
     - Admin
     - Creates a payment method for the
       current account.
   * - Set default payment
     - Admin
     - Deletes the default payment
       method for the current account.


.. note::

    Role-Based Access Control (RBAC) is enabled for the billing-services level (BSL)
    and payment-services level (PSL) only through the `Rackspace Technology Customer Portal <https://login.rackspace.com>`_.
    Rackspace Technology does not provide API access for BSL and PSL at this time.
