<!DOCTYPE html>
<html lang="en">
    <%- include('partials/head') %>
    <body id="body-pd">
        <%- include('partials/header') %>
        <div class="l-navbar" id="nav-bar">
            <nav class="nav">
                <div> 
                    <a href="#" class="nav_logo"> 
                        <img alt="Club" src="images/CSM_Logo.png" class="nav_logo-img">
                        <span class="nav_logo-name">C. S. Marítimo</span> 
                    </a>
                    <div class="nav_list"> 
                        <a href="#" class="nav_link active"> 
                            <i class='bx bx-grid-alt nav_icon'></i> 
                            <span class="nav_name">Dashboard</span> 
                        </a> 
                        <a href="#" class="nav_link"> 
                            <i class='bx bx-user nav_icon'></i> 
                            <span class="nav_name">Users</span> 
                        </a> 
                        <a href="#" class="nav_link"> 
                            <i class='bx bx-football nav_icon'></i> 
                            <span class="nav_name">Trainings</span> 
                        </a> 
                        <a href="#" class="nav_link"> 
                            <i class='bx bx-pencil nav_icon'></i> 
                            <span class="nav_name">RPE</span> 
                        </a> 
                    </div>
                </div> 
                <a href="#" class="nav_link" id="logout"> 
                    <i class='bx bx-log-out nav_icon'></i> 
                    <span class="nav_name">SignOut</span>
                </a>
            </nav>
        </div>
        <%- include('partials/footer') %>
        <script src="js/dashboard.js"></script>
    </body>
</html>