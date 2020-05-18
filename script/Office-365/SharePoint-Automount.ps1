$tenantAutoMountRegKey="HKLM:\SOFTWARE\Policies\Microsoft\OneDrive\TenantAutoMount"

$autoMountTeamSitesList= @{
    #Enter your SharePoint libraries to configure here as key/value pairs
    [ABC Site]="tenantId=XXXXXXXXX"
}

if (-not (Test-Path $tenantAutoMountRegKey)){
    New-Item -Path $tenantAutoMountRegKey -Force
}

#add registry entries from the hashtable above
$autoMountTeamSitesList.GetEnumerator() | ForEach-Object {
    Set-ItemProperty -Path $tenantAutoMountRegKey -Name $PSItem.Key -Value $PSItem.Value -ErrorAction Stop
}
