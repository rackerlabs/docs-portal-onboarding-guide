.. _interpret_situation:

============================
Interpret a situation ticket
============================

The following section explains how to
interpret the three parts of a situation ticket:

- Subject line

- Initial and additional comments

- Ticket summary

Subject line
~~~~~~~~~~~~

When a situation ticket is generated or
AIOps adds alerts to the situation,
the subject line dynamically updates
to reflect the most recent information.
The following image shows the subject
line of a situation ticket:

    .. image:: /_images/situation_subject.png
        :alt: **subject line for situation tickets**

The following table describes the
parts of a situation ticket subject line:

.. list-table::
   :widths: 50 50
   :header-rows: 1

   * - Section
     - Description
   * - Situation number
     - A unique situation number.
   * - Alert description
     - The number of alerts associated
       with the situation ticket.
   * - Alert count
     - The number of alerts associated
       with the situation ticket.
   * - Ticket number
     - A unique ticket number.

Initial and additional comments
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Situation tickets update when AIOps adds an
alert to the situation. Each update includes the
new alert, a link to the situation,
and the Rackspace Notification System (RNS).
The following image shows an updated sample
situation ticket:

  .. image:: /_images/additional_comments.png
        :alt: **situation tickets additional comments**

The following table explains how
to interpret a situation ticket.

.. list-table::
   :widths: 50 50
   :header-rows: 1

   * - Section
     - Description
   * - A
     - Notifications Link: Shows the link
       to the notifications. Click the link
       to view the associated
       alerts on the **Notifications** page of
       the Rackspace Technology Customer Portal.
       **Important**: You do not see notifications
       for devices for which you do not have
       permissions.
       If you do not see any related notifications,
       review your device permissions. After you adjust
       the permissions, you will see alerts generated
       from that point forward.
   * - B
     - Situation Details: Shows the unique situation
       number, the Account Number associated with
       the situation, and the date and time the system
       generated the situation ticket.
   * - C
     - Clustered Alerts: Lists the alerts associated
       with the situation ticket.


Ticket summary
~~~~~~~~~~~~~~~~

When the support team clears a situation, the system
updates the situation ticket with summary information.

.. note::

     The summary includes all alerts associated with the ticket,
     including any alerts that you did not previously receive because
     they were initially internal to Rackspace Technology.

.. image:: /_images/ticket_summary.png
    :alt: **situation tickets additional comments**

Refer to the following table to understand how to interpret a
situation ticket summary:

.. list-table::
   :widths: 50 50
   :header-rows: 1

   * - Section
     - Description
   * - A
     - Situation Cleared: Identifies a resolved
       situation as `cleared`.
   * - B
     - Clustered Alerts: Lists the alerts
       associated with the situation
       ticket that have also been cleared.

Navigate to alerts in RNS
~~~~~~~~~~~~~~~~~~~~~~~~~~

The Rackspace Notification System (RNS) contains
all alerts associated with a situation ticket.
From within the
ticket, you can navigate to the **Notifications**
page in the Rackspace Technology Customer Portal.

To navigate to the **Notifications** page, click
the link in the ticket.

  .. image:: /_images/rns.png
        :alt: **situation tickets additional comments**

RNS filters the **Notifications** page to include only the notifications
associated
with the selected situation ticket. On the **Notifications**
page, you can perform the following actions:

- Use the left panel to select the alert you want to view.
- Use the right panel to see the alert message, view its details,
  and see the associated device.
- Click **Actions** to reply to the ticket or modify preferences
  so that you do not receive notification emails for each
  alert posted to the **Notifications** page.

  .. image:: /_images/rns2.png
        :alt: **situation tickets additional comments**

Notification emails
~~~~~~~~~~~~~~~~~~~

By default, the notification system sends you an email
for each alert associated with a situation ticket.
This default setting means that you receive an email
for each situation ticket and all associated alerts.
To receive emails for only the situation ticket,
refer to **Configure notification email preferences**.

  .. image:: /_images/situation_email.png
        :alt: **situation tickets additional comments**

Configure notification email preferences
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

By default, you receive an email for a situation
ticket and associated alert notifications.
This setting can produce many emails. For
example, when a server goes down, you receive a
ticket email and separate alert notification
emails informing you of insufficient memory,
unavailable Apache® service, and a Secure Shell (SSH) error.

You can modify notification preferences
to reduce the number of emails you receive.
You can turn off email notifications globally for
all devices or select the devices for which you do
not want to receive email notifications.

.. note::

    When you turn off email notifications, either
    globally or for specific devices,
    you do not receive any notification emails,
    including warning notifications
    that are not associated with a situation
    ticket.

For example, consider a disk usage scenario where
the monitoring system generates a warning alert
at 75% usage and an error alert at 90% usage.
In this scenario, RNS displays the 75% warning
alert but does not
generate a ticket. When disk usage exceeds 90%,
the monitoring system generates a ticket.

