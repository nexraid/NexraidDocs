# Get Script Execution Policy
Get-ExecutionPolicy -List

# Set Script Execution Policy
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser


# Execution Policy Value = AllSigned, Bypass, Default, RemoteSigned, Restricted, Undefined, Unrestricted

# Scope Value = CurrentUser, LocalMachine, MachinePolicy, Process, UserPolicy
